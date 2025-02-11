"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CarouselProps {
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={images[currentImage]}
          alt="Carousel Image"
          fill
          priority
        ></Image>
      </div>
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
        <button
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out"
          onClick={() =>
            setCurrentImage((currentImage - 1 + images.length) % images.length)
          }
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
        <button
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out"
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
