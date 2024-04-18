import React, { FC } from "react";

// react-icon
import { PiArrowRight } from "react-icons/pi";

export interface ButtonProps {
  btnP?: string;
  btnText?: string;
  btnBg?: string;
  btnBorder?: string;
  buttonText?: string;
  btnIconLeft?: React.ReactNode;
  btnIconRight?: React.ReactNode;
  btnClass?: any;
  btnType?: "submit" | "button" | undefined;
  isDisable?: boolean;

  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  btnBg,
  btnBorder,
  btnP,
  btnText,
  buttonText,
  btnIconLeft,
  btnIconRight,
  btnClass,
  btnType,
  // isDisable,
  handleClick,
}) => {
  return (
    <>
      <button
        // disabled={isDisable}
        type={btnType}
        onClick={handleClick}
        className={` hover:opacity-90 ${btnP ? btnP : "py-[15px] px-8"} ${
          btnText ? btnText : " font-publicB text-[16px] text-white"
        } ${btnBg ? btnBg : "bg-orange-0"} ${
          btnBorder ? btnBorder : " rounded-[2px] "
        } ${
          btnClass
            ? btnClass
            : " flex space-x-3 justify-center hover:space-x-4  "
        }`}
      >
        {btnIconLeft && <span>{btnIconLeft}</span>}{" "}
        <span>{buttonText ? buttonText : "SHOP NOW"}</span>{" "}
        <span>
          {btnIconRight ? (
            btnIconRight
          ) : (
            <PiArrowRight size={24} color="white" className="" />
          )}
        </span>
      </button>
    </>
  );
};

export default Button;
