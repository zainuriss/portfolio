"use client"; // Wajib karena pakai window (client-side)

import { useEffect, useState } from "react";

const LoopText = ({ text = "about", separator = " • " }) => {
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    const updateRepeatCount = () => {
      const screenWidth = window.innerWidth;
      const fontSize = 32; // Ukuran font kamu (px), sesuaikan
      const charPerUnit = (text.length + separator.length); 
      const estCharWidth = fontSize * 0.6; // Estimasi lebar per huruf
      const charsFit = screenWidth / estCharWidth;
      const howMany = Math.ceil(charsFit / charPerUnit);
      setRepeatCount(howMany);
    };

    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);
    return () => window.removeEventListener("resize", updateRepeatCount);
  }, [text, separator]);

  return (
    <div className="text-neutral-800/30 md:text-9xl text-6xl font-bold uppercase px-4 py-2 whitespace-nowrap overflow-hidden place-self-center block md:absolute w-full opacity-100 pointer-events-none">
      {Array.from({ length: repeatCount }).map((_, i) => (
        <span key={i} className="mx-2 ">
          {text + separator}
        </span>
      ))}
    </div>
  );
};

export default LoopText;
