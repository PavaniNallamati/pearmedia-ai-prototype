import { useState } from "react";
import WorkflowText from "./components/WorkflowText";
import WorkflowImage from "./components/WorkflowImage";

export default function App() {
  const [tab, setTab] = useState("text");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
        Pear Media AI Lab 🚀
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setTab("text")} className="px-6 py-2 bg-indigo-600 text-white rounded-xl">
          Text Studio
        </button>
        <button onClick={() => setTab("image")} className="px-6 py-2 bg-purple-600 text-white rounded-xl">
          Image Lab
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        {tab === "text" ? <WorkflowText /> : <WorkflowImage />}
      </div>
    </div>
  );
}
