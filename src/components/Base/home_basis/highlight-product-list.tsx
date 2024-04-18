import React from "react";
import CardProduct from "./card-product";
import imageTop from '../../../../public/images/png/productbottom.png'

interface ListProps {
  // title
}

const HighlightProductList = () => {
  return (
    <div className="block space-y-4">
      <h1 className=" text-[16px] font-publicSB ">FLASH SALE TODAY</h1>
      <div className="block space-y-4">
        {Array.from({ length: 3 }, (_, index) => {
          return (
            <CardProduct
              key={`cardProduct$${index}`}
              name="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
              price={1500}
              cardClassName="p-3 space-x-3 rounded-[3px]"
              contentClassName=" space-y-2 "
              imgW={80}
              imgH={80}
              imgSrc={imageTop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HighlightProductList;
