import { useState } from "react";
import { analyzeImage, generateImage, toBase64 } from "../utils/apiHelpers";

export default function WorkflowImage() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) return alert("Upload image first");

    setLoading(true);
    const base64 = await toBase64(file);
    const res = await analyzeImage(base64);
    setAnalysis(res);
    setLoading(false);
  };

  const handleGenerate = async () => {
    setLoading(true);
    const img = await generateImage(analysis);
    setImage(img);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button
        onClick={handleAnalyze}
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
      >
        Analyze Image
      </button>

      {loading && <p className="text-indigo-500">Processing...</p>}

      {analysis && (
        <>
          <div className="p-3 bg-gray-100 rounded-xl">{analysis}</div>

          <button
            onClick={handleGenerate}
            className="bg-purple-600 text-white px-4 py-2 rounded-xl"
          >
            Generate Variation
          </button>
        </>
      )}

      {image && (
        <img
          src={image}
          alt="variation"
          className="rounded-xl shadow-lg"
        />
      )}
    </div>
  );
}
