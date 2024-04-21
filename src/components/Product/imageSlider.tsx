import React, { useState } from "react";
import Image from "next/image";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

interface SlideProps {
  images: string[];
}

const Slider: React.FC<SlideProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevActiveSlide) => {
      if (prevActiveSlide === images.length - 1) {
        return 0;
      }

      return prevActiveSlide + 1;
    });
  };

  const handlePrevious = () => {
    setActiveSlide((prevActiveSlide) => {
      if (prevActiveSlide === 0) {
        return images.length - 1;
      }

      return prevActiveSlide - 1;
    });
  };

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col w-[510px] space-y-6">
      <div className="rounded border border-black-4 h-[464px] flex">
        <Image
          priority
          src={images && images[activeSlide]}
          alt={"alt"}
          height={464}
          width={510}
        />
      </div>

      <div className="flex  relative  ">
        <button
          className="absolute -left-5 top-1/3 border-[2px] border-white rounded-full p-2 cursor-pointer bg-orange-0 text-white"
          onClick={handlePrevious}
          // disabled={active === 1}
        >
          {" "}
          <PiArrowLeft size={24} />
        </button>
        <div className="flex space-x-2 ">
          {images &&
            images.map((imageSrc, index) => {
              return (
                <span
                  onClick={() => handleThumbnailClick(index)}
                  className={`border-[2px] rounded-[2px] flex h-[96px] w-[96px] hover:opacity-90 cursor-pointer ${
                    index === activeSlide ? "border-orange-0" : "border-black-4"
                  }`}
                >
                  <Image
                    src={imageSrc}
                    alt={imageSrc + index}
                    layout="fixed"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </span>
              );
            })}
        </div>
        <button
          className="absolute -right-5 top-1/3 border-[2px] border-white rounded-full p-2 cursor-pointer bg-orange-0 text-white"
          onClick={handleNext}
          // disabled={active === totalPages}
        >
          {" "}
          <PiArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
