import React, { useContext } from "react";

// components
import CartTotal from "@/components/Cart/cartTotal";
import ShoppingCart from "@/components/Cart/shoppingCart";
// import { CartContext } from "@/context/cart";

// const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

const Index = () => {
  return (
    <div className="text-sm text-black-0 flex justify-center items-start px-[300px] pt-[102px] pb-[124px] space-x-6">
      <ShoppingCart />
      {/* <CartTotal /> */}
    </div>
  );
};

export default Index;
