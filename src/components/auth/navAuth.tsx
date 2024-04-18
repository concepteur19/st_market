import React, { useState } from "react";

interface LoginProps {
  handleFormChange: (isActive: boolean) => void;
}

const NavAuth: React.FC<LoginProps> = ({ handleFormChange }) => {
  const [isActive, setActive] = useState(true);

  const handleNavClick = (param: string) => {
    if (param === "in" && isActive === false) {
        
      handleFormChange(!isActive);
      setActive(!isActive);
    } else if (param === "up" && isActive === true) {

      handleFormChange(!isActive);
      setActive(!isActive);
    }
  };

  return (
    <div className="border border-transparent border-b-black-4 font-publicSB text-[20px]">
      <div className="flex justify-center w-full">
        <p
          className={`${
            isActive ? "text-black-0  border-b-orange-0 " : " text-[#77878F]"
          } border-[2px] border-transparent w-[50%] flex justify-center py-4`}
          onClick={() => handleNavClick("in")}
        >
          Sign In
        </p>
        <p
          className={`${
            !isActive ? "text-black-0  border-b-orange-0 " : " text-[#77878F]"
          } border-[2px] border-transparent w-[50%] flex justify-center py-4`}
          onClick={() => handleNavClick("up")}
        >
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default NavAuth;
