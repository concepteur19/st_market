import React from "react";

interface PriceCircleProps {
  bgColor: string;
  priceColor: string;
  price: number;
  priceCircleClass: string;
}

const PriceCircle: React.FC<PriceCircleProps> = ({
  bgColor,
  priceColor,
  price,
  priceCircleClass,
}) => {
  return (
    <span
      className={`${bgColor} ${priceColor} ${priceCircleClass} 
      absolute font-publicSB border-[5px] border-white text-[21px] w-[105px] h-[105px] rounded-full flex justify-center items-center`}
    >
      {" "}
      ${price}{" "}
    </span>
  );
};

export default PriceCircle;
