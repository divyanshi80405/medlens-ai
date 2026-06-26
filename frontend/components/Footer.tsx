export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="flex flex-col items-center text-center">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MedLens AI
          </h2>

          <p className="mt-3 max-w-xl text-slate-400 leading-7">
            An Explainable AI-powered platform for chest X-ray analysis using
            DenseNet121, FastAPI and Next.js.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="https://github.com/divyanshi80405"
              target="_blank"
              className="rounded-xl border border-slate-700 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshi-negi/"
              target="_blank"
              className="rounded-xl border border-slate-700 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="YOUR_PORTFOLIO_URL"
              target="_blank"
              className="rounded-xl border border-slate-700 px-5 py-3 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Portfolio
            </a>

          </div>

          <div className="mt-12 h-px w-full bg-slate-800" />

          <p className="mt-8 text-slate-500">
            Built by <span className="font-semibold text-white">Divyanshi Negi</span>
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            ⚠ This application is intended for educational and research
            purposes only. It is not a medical device and should not be used
            for clinical diagnosis or treatment decisions.
          </p>

          <p className="mt-6 text-sm text-slate-600">
            © 2026 MedLens AI • Next.js • FastAPI • PyTorch • TorchXRayVision
          </p>

        </div>

      </div>

    </footer>
  );
}