from pathlib import Path
import shutil

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from models.xray_model import predictor

app = FastAPI(title="MedLens AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@app.get("/")
def home():
    return {"message": "MedLens AI API Running 🚀"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    temp_path = UPLOAD_DIR / file.filename

    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        result = predictor.predict(temp_path)

        result["filename"] = file.filename
        result["explanation"] = (
            f"The AI model identified the strongest evidence for "
            f"{result['prediction']} with a confidence of "
            f"{result['confidence']}%."
        )

        return result

    finally:
        if temp_path.exists():
            temp_path.unlink()