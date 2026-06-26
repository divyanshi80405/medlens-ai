from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MedLens AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "MedLens AI API Running 🚀"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    return {
    "filename": file.filename,
    "prediction": "Pneumonia",
    "confidence": 0.91,
    "severity": "Moderate",
    "processing_time": "0.84 sec",
    "explanation": "This is a mock prediction used to verify frontend-backend communication.",
    "heatmap_available": False
}