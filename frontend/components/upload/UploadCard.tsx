"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { analyzeImage } from "@/lib/api";

import ImagePreview from "../preview/ImagePreview";
import ResultCard from "../results/ResultCard";

export default function UploadCard() {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Uploading image...",
    "Preprocessing X-ray...",
    "Running DenseNet121...",
    "Detecting abnormalities...",
    "Generating explanation..."
  ];

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    setLoading(true);
    setResult(null);

    try {

      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        await new Promise(resolve => setTimeout(resolve, 450));
      }

      const response = await analyzeImage(file);

      console.log("Backend response:", response);

      setResult(response);

    } catch (err) {
      console.error(err);
      alert("Failed to analyze image.");
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="mt-0 w-full">

      {/* Upload Box */}

      <div
  {...getRootProps()}
  className={`glass card-hover cursor-pointer rounded-3xl border-2 border-dashed py-8 px-10 transition ${
  isDragActive
    ? "border-cyan-400 bg-cyan-400/10"
    : "border-slate-700 bg-slate-900/50 hover:border-cyan-500"
}`}
      >
        <input {...getInputProps()} />

        <div className="text-center">

          <h3 className="text-2xl font-semibold">
            Upload Chest X-ray
          </h3>

          <p className="mt-3 text-slate-400">
            Drag & Drop or Click to Browse
          </p>

        </div>

      </div>

      {/* Result Layout */}

      {/* AI Loading */}

{loading && (
  <div className="glass mt-10 rounded-3xl p-8">

    <h2 className="mb-6 text-2xl font-bold text-cyan-300">
      🧠 AI Analysis
    </h2>

    <div className="space-y-4">

      {steps.map((step, index) => (

        <div
          key={step}
          className="flex items-center gap-4"
        >

          <div
            className={`h-3 w-3 rounded-full ${
              index <= currentStep
                ? "bg-cyan-400 animate-pulse"
                : "bg-slate-700"
            }`}
          />

          <span
            className={
              index <= currentStep
                ? "text-white"
                : "text-slate-500"
            }
          >
            {step}
          </span>

        </div>

      ))}

    </div>

  </div>
)}

{/* Result Layout */}

<div className="mt-12 grid gap-8 lg:grid-cols-2">

  <ImagePreview preview={preview} />

  <ResultCard
    result={result}
    loading={loading}
  />

</div>

    </div>
  );
}