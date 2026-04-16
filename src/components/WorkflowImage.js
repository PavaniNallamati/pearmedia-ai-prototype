import { useState } from "react";
import { analyzeImage, generateImage, toBase64 } from "../utils/apiHelpers";

export default function WorkflowImage() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [image, setImage] = useState("");

  const handleAnalyze = async () => {
    const base64 = await toBase64(file);
    const res = await analyzeImage(base64);
    setAnalysis(res);
  };

  const handleGenerate = async () => {
    const img = await generateImage(analysis);
    setImage(img);
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleAnalyze} className="bg-indigo-600 text-white px-4 py-2 rounded-xl">
        Analyze Image
      </button>

      {analysis && (
        <>
          <p>{analysis}</p>
          <button onClick={handleGenerate} className="bg-purple-600 text-white px-4 py-2 rounded-xl">
            Generate Variation
          </button>
        </>
      )}

      {image && <img src={image} alt="variation" className="rounded-xl" />}
    </div>
  );
}
