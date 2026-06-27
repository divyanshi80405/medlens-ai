from pathlib import Path
import shutil

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from models.xray_model import get_predictor

predictor = get_predictor()
result = predictor.predict(image_path)

app = FastAPI(title="MedLens AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://medlens-j0bev7pc0-divi2.vercel.app",
    ]
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
    f"The model detected patterns most consistent with "
    f"{result['prediction']} "
    f"({result['confidence']}% confidence). "
    "This is an AI-assisted analysis and should not be "
    "considered a medical diagnosis. Clinical evaluation "
    "by a qualified healthcare professional is recommended."
)

        return result

    finally:
        if temp_path.exists():
            temp_path.unlink()