// components
import Image from "next/image";
import CardProduct from "@/components/Base/home_basis/card-product";
import HighlightProductList from "@/components/Base/home_basis/highlight-product-list";
import Button from "@/components/Shared/Button";
import PriceCircle from "@/components/Base/home_basis/price-circle";
import OurStrengthContainer from "@/components/Base/home_basis/our-strength-container";
import ProductBadge from "@/components/Base/home_basis/product-badge";
import TopProduct from "@/components/Home/TopProduct";

//  image src
import imageTop from "../../public/images/png/producttop.png";
import imagebottom from "../../public/images/png/cardBottom.png";

// react-icon
// import { PiArrowRight } from "react-icons/pi";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-0 m-0 text-black-0">

      <div className="flex space-x-6 px-[300px] my-6">
        <TopProduct />

        <div className=" flex flex-col space-y-6">
          <div className=" w-full relative p-14 rounded-[6px] bg-black-0 h-1/2"></div>
          <div className="relative p-14 rounded-[6px] bg-black-3 w-full h-1/2"></div>
        </div>
      </div>

      <div className=" px-[300px]">
        <OurStrengthContainer />
      </div>

      <div className="grid grid-cols-5 grid-flow-row px-[300px] py-[72px] gap-4 ">
        {Array.from({ length: 10 }, (_, index) => {
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

      {/* component reminder */}
      <div className="px-[241px]  ">
        <div className="flex justify-between bg-orange-2">
          <div className=" my-20 ml-[72px] space-y-6">
            <div className="flex flex-col space-y-3">
              <ProductBadge
                badgeText="SAVE UP TO $200.00"
                bgColor=" bg-blue-0"
                textColor=" font-publicSB text-white py-[6px] px-3 "
              />

              <h1 className=" font-publicSB text-5xl">Macbook Pro</h1>
            </div>

            <p className=" font-publicR text-2xl">
              Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage
            </p>

            <Button />
          </div>

          <div className="p-0 mr-12 relative">
            <Image src={imagebottom} alt="bottom" width={536} height={424} />
            <PriceCircle
              priceColor=" "
              bgColor=" bg-orange-3"
              price={1999}
              priceCircleClass=" top-10 -left-1"
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-6 px-[300px] py-[72px] ">
        <HighlightProductList />
        <HighlightProductList />
        <HighlightProductList />
        <HighlightProductList />
      </div>
    </div>
  );
}
