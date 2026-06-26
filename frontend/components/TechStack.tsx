import {
  Brain,
  Server,
  Database,
  Globe,
  Palette,
} from "lucide-react";

export default function TechStack() {
  const tech = [
    {
      icon: Globe,
      name: "Next.js",
      desc: "Frontend",
    },
    {
      icon: Server,
      name: "FastAPI",
      desc: "Backend API",
    },
    {
      icon: Brain,
      name: "PyTorch",
      desc: "Deep Learning",
    },
    {
      icon: Database,
      name: "TorchXRayVision",
      desc: "Medical AI",
    },
    {
      icon: Palette,
      name: "Tailwind CSS",
      desc: "UI Design",
    },
  ];

  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">

      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Built With
        </h2>

        <p className="mt-4 text-slate-400">
          Modern technologies powering MedLens AI
        </p>

      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

        {tech.map((item) => (
          <div
            key={item.name}
            className="glass card-hover rounded-3xl p-6 text-center"
          >

            <item.icon
              size={38}
              className="mx-auto mb-5 text-cyan-400"
            />

            <h3 className="text-lg font-semibold">
              {item.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}