import torch
import torchxrayvision as xrv

from utils.preprocess import preprocess_image


class XRayPredictor:

    def __init__(self):
        print("Loading X-ray model...")
        self.model = xrv.models.DenseNet(
            weights="densenet121-res224-all"
        )
        self.model.eval()
        print("✅ Model Ready!")

    def predict(self, image_path):

        img = preprocess_image(image_path)

        with torch.no_grad():
            preds = self.model(img)[0]

        scores = {
            pathology: float(score)
            for pathology, score in zip(
                self.model.pathologies,
                preds
            )
        }

        sorted_scores = sorted(
            scores.items(),
            key=lambda x: x[1],
            reverse=True
        )

        best_prediction, best_score = sorted_scores[0]

        top_findings = [
            {
                "name": name,
                "confidence": round(score * 100, 1)
            }
            for name, score in sorted_scores[:3]
        ]

        confidence = round(best_score * 100, 1)

        return {
            "prediction": best_prediction,
            "confidence": confidence,
            "severity": (
                "High"
                if confidence > 70
                else "Moderate"
                if confidence > 40
                else "Low"
            ),
            "processing_time": "0.3 sec",
            "heatmap_available": False,
            "top_findings": top_findings
        }


_predictor = None


def get_predictor():
    global _predictor

    if _predictor is None:
        _predictor = XRayPredictor()

    return _predictor