import React from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const ShoppingCartIcon = () => {
  const elementsInCart = 23;

  return (
    <div className="relative">
      <PiShoppingCartSimpleLight color="#ffffff" size={32} />
      {elementsInCart > 0 && (
        <span className=" absolute top-[6px] left-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-1 border border-blue-1 rounded-[50%] bg-white w-5 h-5 py-[2px] font-publicSB text-xs">
          {elementsInCart}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
