import React, { useState } from "react";

// react icons
import { BiPlus, BiMinus } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { PiArrowLeft } from "react-icons/pi";

// component
import Button from "../Shared/Button";

const ShoppingCart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
    },
  ]);

  const calculateSubTotal = (price: number, quantity: number) =>
    price * quantity;

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className=" flex flex-col border border-black-4 text-sm w-[872px]">
      <header className=" py-5 px-6 ">
        <h1 className=" font-publicSB text-lg">Shopping Cart</h1>
      </header>
      <main>
        <div className=" w-full">
          <div className=" border border-black-4 text-[12px] bg-black-4 text-black-2 w-full">
            <div className="flex justify-between py-[10px] px-6">
              <span className=" w-[35.32%]">PRODUCTS</span>
              <span className=" w-[10.1%%]">PRICE</span>
              <span className=" w-[19.72%%]">QUANTITY</span>
              <span>SUB-TOTAL</span>
            </div>
          </div>
          <div className=" p-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center space-y-4"
              >
                <div className="w-[308px] flex items-center space-x-4">
                  <span className=" cursor-pointer">
                    <RxCrossCircled color="#929FA5" size={24} />
                  </span>{" "}
                  <span>{item.name}</span>
                </div>
                <span className=" flex justify-start ">${item.price}</span>
                <span className="flex items-center border border-black-4 px-5 py-3 space-x-7 w-[148px]">
                  <button
                    className="inline-block rounded-md text-gray-400 hover:text-gray-600 text-[16px]"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <BiMinus size={16} />
                  </button>
                  <span className="mx-2 text-[16px]">{item.quantity}</span>
                  <button
                    className="inline-block rounded-md text-gray-400 hover:text-gray-600"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <BiPlus size={16} />
                  </button>
                </span>
                <span className="text-left">
                  ${calculateSubTotal(item.price, item.quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="border border-transparent border-t-black-4 p-6 flex justify-between font-publicB">
        <Button
          btnBg=" bg-white"
          btnText=" text-blue-0"
          btnBorder=" border-[2px] border-blue-0"
          btnIconLeft = {<PiArrowLeft size={24} />}
          btnIconRight
          buttonText="RETURN TO SHOP"
        />
        <Button
          btnBg=" bg-white"
          btnText=" text-blue-0"
          btnBorder=" border-[2px] border-blue-0"
          btnIconRight
          buttonText="UPDATE CART"
        />
      </footer>
    </div>
  );
};

export default ShoppingCart;
