export async function analyzeImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://divyanshi80405-medlens-ai-api.hf.space/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze image");
  }

  return response.json();
}