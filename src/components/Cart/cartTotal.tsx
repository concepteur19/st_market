import React from "react";
import Button from "../Shared/Button";

interface CardTotalProps {
  tax?: number;
  subTotal: number;
  shipping?: number;
  discount?: number;
}

const CartTotal: React.FC<CardTotalProps> = ({
  tax,
  subTotal,
  shipping,
  discount,
}) => {
  return (
    <div className="px-6 pb-6 flex flex-col border border-black-4 ">
      <h1 className=" py-5 font-publicSB text-[18px]"> Cart Totals</h1>

      {/* <div className="space-x-4"> */}
        <ul className=" space-y-3 pb-1 mb-4">
          <li className=" flex justify-between">
            <span className=" text-black-1">Sub-total</span>
            <span>$ {subTotal}</span>
          </li>
          <li className=" flex justify-between">
            <span className=" text-black-1">Tax</span>
            <span>$ {tax}</span>
          </li>
          <li className=" flex justify-between">
            <span className=" text-black-1">Shipping</span>
            <span>$ {shipping}</span>
          </li>
          <li className=" flex justify-between">
            <span className=" text-black-1">Discount</span>
            <span>$ {discount}</span>
          </li>
        </ul>

        <hr />

        <div className=" flex justify-between font-publicSB text-[16px] mt-4 mb-6">
          <span>Total</span>
          <span>$ {subTotal+tax!+shipping!-discount!}</span>
        </div>
      {/* </div> */}

      <Button 
        buttonText="PROCEED TO CHECKOUT"
        btnP=" px-[60px] py-4 "
      />
    </div>
  );
};

export default CartTotal;
