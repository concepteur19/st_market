import React from "react";

export interface BadgeProps {
  badgeText: string;
  bgColor: string;
  textColor: string;
}

const ProductBadge: React.FC<BadgeProps> = ({
  bgColor,
  textColor,
  badgeText,
}) => {
  return (
    <span
      className={`${bgColor} ${textColor} badge rounded-[2px] px-[10px] py-[5px] w-fit`}
    >
      {badgeText}
    </span>
  );
};

export default ProductBadge;
