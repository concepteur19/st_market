// import { CartContext } from "@/context/CartContext";
// import { useCartContext } from "@/context/CartContext";
import { useCartContext } from "@/context/Context";
import Link from "next/link";
import React, { useContext } from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const ShoppingCartIcon = () => {
  // const { cartLength } = useContext(CartContext);

  // const cartLength = 0
  // console.log(cartLength);
  // const {cart} = useCartContext();
  const { cartItems } = useCartContext();

  console.log(cartItems);

  return (
    <Link href={'/cart'}>
      <div className="relative">
        <PiShoppingCartSimpleLight color="#ffffff" size={32} />
        {cartItems?.length > 0 && (
          <span className=" absolute top-[6px] left-6 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-1 border border-blue-1 rounded-[50%] bg-white w-5 h-5 py-[2px] font-publicSB text-xs">
            {cartItems.length || 0}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ShoppingCartIcon;
