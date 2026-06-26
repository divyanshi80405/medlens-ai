"use client";

import { motion } from "framer-motion";
import UploadCard from "@/components/upload/UploadCard";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          MedLens AI
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-3xl font-semibold"
        >
          Explainable AI for Medical Imaging
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-lg text-slate-300"
        >
          Upload a medical image and explore how AI reaches its predictions.
        </motion.p>
      </div>
    <UploadCard />
    </section>
  );
}