# MedLens AI

MedLens AI is an AI-powered medical image analysis platform designed to assist in chest X-ray interpretation through deep learning. The application provides a modern web interface where users can upload medical images and receive predictions with confidence scores in real time.

The project combines a Next.js frontend with a FastAPI backend and is deployed using Vercel and Hugging Face Spaces.

---

## Live Demo

**Application:** https://medlens-j0bev7pc0-divi2.vercel.app

**Backend API:** https://divyanshi80405-medlens-ai-api.hf.space

---

## Features

* Upload chest X-ray images for analysis
* AI-powered disease prediction
* Confidence score generation
* FastAPI inference backend
* Responsive and modern user interface
* Fully deployed frontend and backend

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* FastAPI
* Python
* PyTorch
* TorchVision

### Deployment

* Vercel
* Hugging Face Spaces

---

## Project Structure

```text
medlens-ai/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── api/
│   ├── app.py
│   ├── requirements.txt
│   └── ...
│
└── README.md
```

---

## Running the Project Locally

### Clone the repository

```bash
git clone https://github.com/divyanshi80405/medlens-ai.git
cd medlens-ai
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd api
pip install -r requirements.txt
uvicorn app:app --reload
```

The frontend runs on:

```text
http://localhost:3000
```

The backend runs on:

```text
http://127.0.0.1:8000
```

---

## Screenshots

Include screenshots demonstrating:

* Landing page
* Image upload interface
* Prediction results
* Model output and confidence scores

---

## Future Improvements

* Multi-class disease classification
* Explainability using Grad-CAM
* Downloadable medical reports
* User authentication
* Prediction history
* Performance optimization for large-scale deployment

---

## Author

**Divyanshi Negi**

GitHub: https://github.com/divyanshi80405

LinkedIn: https://www.linkedin.com/in/divyanshi-negi/

---

## Disclaimer

This project is intended for educational and research purposes only. It is not designed to replace professional medical diagnosis or clinical decision-making.
