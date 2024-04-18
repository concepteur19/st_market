import React, { FC } from "react";
import Image from "next/image";

// images
import logoSrc from "../../../public/images/png/Iconblk.png";
import android from "../../../public/images/png/image1.png";
import ios from "../../../public/images/png/image2.png";

//components
import Logo from "../Shared/Logo";
import FooterList from "../Base/footer_basis/footerList";
import Contact from "../Base/footer_basis/contact";
import SocialMedia from "../Base/footer_basis/socialMedia";

const Footer: FC = () => {
  const linksList = [
    "Shop product",
    "Shopping cart",
    "Wishlist",
    "Customer help",
  ];
  const categoryList = ["Computers & Laptop", "SmartPhone", "Headphone"];

  return (
    <div className="flex w-full pt-[53.29px] pb-16 shadow-[0_-2px_20px_-5px_rgba(0,0,0,0.2)]">
      <div className=" flex justify-between items-start px-[15.625%]  text-sm text-[#0E0F1D] font-publicR space-x-36">
        <div className="flex flex-col justify-start space-y-[23.14px]">
          <Logo logo={logoSrc} textColor="text-[25px]" />
          <span>Download the app by clicking the link below :</span>
          <span className=" flex space-x-7">
            <Image src={android} alt="android" />
            <Image src={ios} alt="ios" />
          </span>
        </div>

        <div className="flex justify-start space-x-[85px] ">
          <FooterList title="Quick Links" listTab={linksList} />

          <FooterList title="Top Category" listTab={categoryList} />

          <Contact />
        </div>

        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
