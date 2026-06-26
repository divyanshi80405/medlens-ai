import { Brain, Activity, Zap } from "lucide-react";

export default function FeatureCards() {
  const features = [
    {
      icon: Brain,
      title: "AI Diagnosis",
      desc: "DenseNet121 analyzes chest X-rays to identify potential thoracic abnormalities."
    },
    {
      icon: Activity,
      title: "Explainable Results",
      desc: "Confidence scores and top findings help users understand every prediction."
    },
    {
      icon: Zap,
      title: "Fast Inference",
      desc: "End-to-end analysis completes in seconds using FastAPI and PyTorch."
    }
  ];

  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="glass card-hover rounded-3xl p-8"
          >
            <feature.icon
              size={40}
              className="mb-5 text-cyan-400"
            />

            <h3 className="text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}