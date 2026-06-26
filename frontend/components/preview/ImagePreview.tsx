"use client";

import Image from "next/image";

interface Props {
  preview: string | null;
}

export default function ImagePreview({ preview }: Props) {
  if (!preview) {
    return (
      <div className="h-[420px] rounded-3xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-500">
        Upload an image to preview
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
      <Image
        src={preview}
        alt="Preview"
        width={450}
        height={450}
        className="rounded-2xl w-full object-cover"
      />
    </div>
  );
}