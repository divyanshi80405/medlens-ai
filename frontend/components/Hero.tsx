"use client";

import { motion } from "framer-motion";
import UploadCard from "@/components/upload/UploadCard";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            MedLens AI
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-2xl md:text-3xl font-semibold text-white"
          >
            Explainable AI for Medical Imaging
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-slate-300"
          >
            Upload a chest X-ray and receive an AI-powered diagnosis with
            confidence scores, explainable visualizations, and easy-to-understand
            medical insights.
          </motion.p>

        </div>

        <div className="mt-20">
          <UploadCard />
        </div>

      </div>
    </section>
  );
}