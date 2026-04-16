import React from "react";

export default function ImageCard({ src }) {
  if (!src) return null;

  return (
    <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <img
        src={src}
        alt="Generated"
        className="w-full h-auto rounded-xl"
      />

      <a href={src} download>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700">
          Download Image
        </button>
      </a>
    </div>
  );
}
