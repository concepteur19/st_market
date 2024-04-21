import React from "react";

// components
import Image, { StaticImageData } from "next/image";
import ProductBadge, { BadgeProps } from "./product-badge";

//react-icons
import { BsStar, BsStarFill } from "react-icons/bs";

interface CardProductPros {
  notation?: number;
  name: string;
  price: number;
  imgSrc: any;
  description?: string;
  badge?: BadgeProps;
  cardClassName: string;
  imgW: number;
  imgH: number;
  contentClassName: string;
}

const CardProduct: React.FC<CardProductPros> = ({
  name,
  price,
  notation,
  description,
  badge,
  imgW,
  imgH,
  imgSrc,
  contentClassName,
  cardClassName,
}) => {
  const numberOfStars = Math.trunc(notation!);
  const remainStars = 5 - numberOfStars;

  return (
    <div
      className={`font-publicR text-sm py-[14.5px] flex justify-center border border-black-4 ${cardClassName} hover:bg-slate-100 cursor-pointer`}
    >
      <div style={{ width: imgW, height: imgH, overflow: "hidden" }}>
        {badge && (
          <ProductBadge
            textColor={badge!.textColor}
            bgColor={badge!.bgColor}
            badgeText={badge!.badgeText}
          />
        )}
        <Image src={imgSrc} alt="" className="" layout="fixed" width={imgW} height={imgH} objectFit="cover"/>
        
      </div>
      <div className={`flex flex-col ${contentClassName}`}>
        {notation && (
          <span className="stars flex space-x-[2px] ">
            {Array.from({ length: numberOfStars }, (_, index) => {
              return (
                <BsStarFill
                  key={"star" + index}
                  size={13}
                  className=" fill-orange-0"
                />
              );
            })}

            {Array.from({ length: remainStars }, (_, index) => {
              return (
                <BsStar
                  key={"starFill" + index}
                  color="#ADB7BC"
                  size={13}
                  className=" stroke-[0.5px]"
                />
              );
            })}
          </span>
        )}
        <p>{name.slice(0, 52)}{name.length >52 && "..."}</p>
        <span className=" text-blue-0 font-publicSB">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
