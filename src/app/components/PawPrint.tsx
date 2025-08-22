// PawPattern.jsx
import Image from "next/image";

const PawPattern = () => {
  // Number of pawprints per row/column
  const rows = 15;
  const cols = 11;

  return (
    <div className="absolute -left-130  grid grid-cols-11 gap-8 p-7 -rotate-25">
      {Array.from({ length: rows * cols }).map((_, idx) => (
        <div key={idx} className="relative w-10 h-10">
          <Image
            src="/assets/pawprint.png"
            alt="cat"
            className="rounded-lg w-3 h-3 p-1 text-red-500"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
};

export default PawPattern;
