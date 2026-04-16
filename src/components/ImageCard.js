export default function ImageCard({ src }) {
  return (
    <div className="p-2">
      <img src={src} alt="AI result" className="rounded-xl shadow-md" />
    </div>
  );
}
