"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

export default function UploadCard() {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="mt-12 flex flex-col items-center">

      <div
        {...getRootProps()}
        className={`w-full max-w-xl rounded-3xl border-2 border-dashed p-10 cursor-pointer transition
        ${
          isDragActive
            ? "border-cyan-400 bg-cyan-400/10"
            : "border-slate-700 bg-slate-900/60"
        }`}
      >
        <input {...getInputProps()} />

        <div className="text-center">

          <p className="text-xl font-semibold">
            Drag & Drop a Medical Image
          </p>

          <p className="mt-2 text-slate-400">
            or click to browse
          </p>

          <p className="mt-4 text-sm text-slate-500">
            JPG • JPEG • PNG
          </p>

        </div>
      </div>

      {preview && (
        <div className="mt-8">

          <Image
            src={preview}
            alt="Preview"
            width={350}
            height={350}
            className="rounded-xl border border-slate-700"
          />

        </div>
      )}
    </div>
  );
}