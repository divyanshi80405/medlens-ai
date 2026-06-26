"use client";

interface Props {
  result: any;
  loading: boolean;
}

export default function ResultCard({
  result,
  loading,
}: Props) {

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 h-full">

      <h2 className="text-3xl font-bold text-cyan-400">
        AI Diagnosis
      </h2>

      {loading && (
        <p className="mt-8 text-slate-400">
          Analyzing X-ray...
        </p>
      )}

      {!loading && !result && (
        <p className="mt-8 text-slate-500">
          Upload an X-ray to receive an AI diagnosis.
        </p>
      )}

      {result && (
        <div className="space-y-5 mt-8">

          <div>
            <p className="text-slate-400">Prediction</p>

            <h3 className="text-2xl font-bold">
              {result.prediction}
            </h3>
          </div>

          <div>
            <p className="text-slate-400">
              Confidence
            </p>

            <h3 className="text-xl">
              {(result.confidence * 100).toFixed(1)}%
            </h3>
          </div>

          <div>
            <p className="text-slate-400">
              Severity
            </p>

            <h3 className="text-xl">
              {result.severity}
            </h3>
          </div>

          <div>
            <p className="text-slate-400">
              Explanation
            </p>

            <p className="mt-2 leading-7">
              {result.explanation}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}