import React from "react";

// component
import Button from "@/components/Shared/Button";
import Image, { StaticImageData } from "next/image";
import PriceCircle from "./price-circle";

// react-icon
import { AiOutlineMinus } from "react-icons/ai";

export interface CardProductTopProps {
  price: number,
  name: string,
  imagesrc: StaticImageData,
  alt?: string
}

const CardProductTop: React.FC<CardProductTopProps> = ({price, name, imagesrc, alt}) => {
  return (
    <div className=" flex items-center space-x-9">
      <div className=" space-y-6 w-[356px] ">
        <div className=" space-y-4">
          <div className=" font-publicSB space-y-1">
            <span className=" flex items-center space-x-2 text-sm text-blue-2 "> <AiOutlineMinus size={24} className=" stroke-[2px]" />   THE BEST PLACE TO PLAY</span>
            <h1 className=" text-5xl ">{name}</h1>
          </div>

          <p className=" font-publicR text-lg text-black-2">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
        </div>

        <Button />
      </div>
      <div className=" relative">
        <Image 
          alt={alt? alt : " "}
          src={imagesrc}
          width={368}
          height={408}
        />

        <PriceCircle 
          bgColor=" bg-blue-0 "
          price={price}
          priceCircleClass=" top-0 right-0 text-white"
          priceColor=""
        />
      </div>
    </div>
  );
};

export default CardProductTop;
