import React from 'react';
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';

interface LogoProps {
    logo: StaticImageData,
    textColor?: string
}

const Logo = ({logo, textColor}: LogoProps) => {
    return (
      <Link href={'/'}>
        <div className=" flex items-center space-x-2 cursor-pointer">
          <span className="lg">
            <Image width={48} height={48} alt="logo" src={logo} />
          </span>
          <span className={`${textColor && textColor} font-publicB text-3xl`}>St Market</span>
        </div>
      </Link>
        
    );
}

export default Logo;
