import { useState } from "react";
import { getEnhancedPrompt, generateImage } from "../utils/apiHelpers";

export default function WorkflowText() {
  const [input, setInput] = useState("");
  const [enhanced, setEnhanced] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEnhance = async () => {
    setLoading(true);
    const res = await getEnhancedPrompt(input);
    setEnhanced(res);
    setLoading(false);
  };

  const handleGenerate = async () => {
    setLoading(true);
    const img = await generateImage(enhanced);
    setImage(img);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-3 border rounded-xl"
        placeholder="Enter your idea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleEnhance}
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
      >
        Enhance Prompt
      </button>

      {loading && <p className="text-indigo-500">Processing...</p>}

      {enhanced && (
        <>
          <textarea
            className="w-full p-3 border rounded-xl"
            value={enhanced}
            onChange={(e) => setEnhanced(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="bg-purple-600 text-white px-4 py-2 rounded-xl"
          >
            Generate Image
          </button>
        </>
      )}

      {image && (
        <img
          src={image}
          alt="result"
          className="rounded-xl shadow-lg mt-4"
        />
      )}
    </div>
  );
}
