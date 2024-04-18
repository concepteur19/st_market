import React from 'react';
import Image, { StaticImageData } from "next/image";

interface LogoProps {
    logo: StaticImageData,
    textColor?: string
}

const Logo = ({logo, textColor}: LogoProps) => {
    return (
        <div className=" flex items-center space-x-2">
          <span className="lg">
            <Image width={48} height={48} alt="logo" src={logo} />
          </span>
          <span className={`${textColor && textColor} font-publicB text-3xl`}>St Market</span>
        </div>
    );
}

export default Logo;
