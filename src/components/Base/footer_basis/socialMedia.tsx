import React from "react";

// components
import FooterTitle from "./footerTitle";

// react-icons
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className=" flex flex-col">
        
      <FooterTitle title="Social media" />

      <div className="flex space-x-4">
        <BiLogoFacebook size={24} />
        <BsTwitterX size={24} />
        <BiLogoLinkedin size={24} />
        <BiLogoInstagram size={24}/>
      </div>
    </div>
  );
};

export default SocialMedia;
