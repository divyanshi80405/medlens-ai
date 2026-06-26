"use client";

interface Finding {
  name: string;
  confidence: number;
}

interface Props {
  result: any;
  loading: boolean;
}

export default function ResultCard({ result, loading }: Props) {
  const confidence = result?.confidence ?? 0;

  return (
    <div className="glass card-hover rounded-3xl p-8">

      <div className="mb-8 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
        <p className="text-slate-400">AI Analysis</p>
      </div>

      <h2 className="text-3xl font-bold text-cyan-400">
        AI Diagnosis
      </h2>

      {loading && (
        <div className="mt-10">
          <p className="text-slate-400 animate-pulse">
            Analyzing X-ray...
          </p>
        </div>
      )}

      {!loading && !result && (
        <p className="mt-10 text-slate-500">
          Upload an X-ray to receive an AI diagnosis.
        </p>
      )}

      {result && (
        <div className="mt-8 space-y-8">

          {/* Prediction */}
          <div>
            <p className="text-slate-400">Prediction</p>

            <h3 className="mt-2 text-4xl font-bold text-cyan-300">
              {result.prediction}
            </h3>
          </div>

          {/* Confidence */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-400">
                Confidence
              </span>

              <span>{confidence}%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                style={{ width: `${confidence}%` }}
              />

            </div>

          </div>

          {/* Severity */}
          <div>

            <p className="text-slate-400 mb-2">
              Severity
            </p>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold
              ${
                result.severity === "High"
                  ? "bg-red-500/20 text-red-400"
                  : result.severity === "Moderate"
                  ? "bg-yellow-500/20 text-yellow-300"
                  : "bg-green-500/20 text-green-300"
              }`}
            >
              {result.severity}
            </span>

          </div>

          {/* Top Findings */}

          <div>

            <p className="text-slate-400 mb-3">
              Top Findings
            </p>

            <div className="space-y-2">

              {result.top_findings.map((item: Finding) => (

  <div key={item.name} className="space-y-2">

    <div className="flex justify-between">

      <span className="font-medium">
        {item.name}
      </span>

      <span className="text-cyan-300">
        {item.confidence}%
      </span>

    </div>

    <div className="h-2 overflow-hidden rounded-full bg-slate-800">

      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
        style={{
          width: `${item.confidence}%`
        }}
      />

    </div>

  </div>

))}

            </div>

          </div>

          {/* Explanation */}

          <div>

            <p className="text-slate-400 mb-3">
              Explanation
            </p>

            <div className="rounded-2xl bg-slate-800/50 p-4 leading-7 text-slate-300">
              {result.explanation}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}