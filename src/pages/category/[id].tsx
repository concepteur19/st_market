import React from "react";

// component
import CardProduct from "@/components/Base/home_basis/card-product";

//  image src
import imageTop from "../../../public/images/png/producttop.png";

const Id = () => {
  return (
    <div className="grid grid-cols-5 grid-flow-row px-[343px] py-[72px] gap-4 ">
      {Array.from({ length: 30 }, (_, index) => {
        return (
          <CardProduct
            key={`cardProduct-${index}`}
            name="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6"
            notation={4.5}
            price={360}
            cardClassName=" p-4 flex-col rounded-[2px] space-y-3"
            contentClassName=" space-y-2"
            imgH={172}
            imgW={202}
            imgSrc={imageTop}
          />
        );
      })}
    </div>
  );
};

export default Id;
