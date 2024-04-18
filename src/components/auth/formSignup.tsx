import React, { useState } from "react";

// components
import Input from "../Shared/Input";
import Button from "../Shared/Button";

// react-icon
import { PiEye, PiEyeSlash, PiArrowRight } from "react-icons/pi";

interface Props {
    refs?: string
  }

const FormSignup = ({refs}: Props) => {
//   const inputChange = () => {};
  const handleLoginSubmit = () => {};
  const handleEyeClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSecondEyeClick = () => {
    setIsOpenSecond(!isOpenSecond);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);

  return (
    <div className=" flex flex-col space-y-4 px-8 pb-9">
      <Input
        inputLabel="Name"
        labelClassname=" font-publicR text-sm "
        inputId="email"
        inputType="email"
        inputClass=" rounded-[2px] border border-[#E4E7E9] pl-2"
        // handleChange={inputChange}
      />

      <Input
        inputLabel="Email Address"
        labelClassname=" font-publicR text-sm "
        inputId="email"
        inputType="email"
        inputClass=" rounded-[2px] border border-[#E4E7E9] pl-2"
        // handleChange={inputChange}
      />

      <Input
        inputLabel="Password"
        placeholder=" 8+ characters"
        labelClassname=" font-publicR text-sm "
        inputId="password"
        inputType={!isOpen ? "password" : "text"}
        inputClass=" rounded-[2px] border border-[#E4E7E9] pl-2"
        // handleChange={inputChange}
        iconPwd={
          !isOpen ? (
            <PiEye
              size={20}
              className=" stroke-[0.5px] cursor-pointer"
              color="#191C1F"
              onClick={handleEyeClick}
            />
          ) : (
            <PiEyeSlash
              size={20}
              className=" stroke-[0.5px] cursor-pointer"
              color="#191C1F"
              onClick={handleEyeClick}
            />
          )
        }
        signupref = {refs}
      />

      <Input
        inputLabel="Confirm Password"
        labelClassname=" font-publicR text-sm "
        inputId="password"
        inputType={!isOpen ? "password" : "text"}
        inputClass=" rounded-[2px] border border-[#E4E7E9] pl-2"
        // handleChange={inputChange}
        iconPwd={
          !isOpenSecond ? (
            <PiEye
              size={20}
              className=" stroke-[0.5px] cursor-pointer"
              color="#191C1F"
              onClick={handleSecondEyeClick}
            />
          ) : (
            <PiEyeSlash

              size={20}
              className=" stroke-[0.5px] cursor-pointer"
              color="#191C1F"
              onClick={handleSecondEyeClick}
            />
          )
        }
        signupref = {refs}
      />

      {/* <PiEyeSlash /> */}

      <Button
        btnBg=" bg-orange-0"
        btnBorder=" rounded-[2px] "
        btnClass=" flex space-x-2 justify-center hover:space-x-3  "
        btnIconRight={<PiArrowRight size={20} color="white" className="" />}
        btnP=" py-[14px] "
        btnText=" font-publicB text-sm text-white"
        buttonText="SIGN UP"
        btnType="submit"
        handleClick={handleLoginSubmit}
      />
    </div>
  );
};

export default FormSignup;
