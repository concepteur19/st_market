import React, { FC, LegacyRef, useState } from "react";

// components
import Input from "../Shared/Input";
import Button from "../Shared/Button";

// react-icon
import { PiEye, PiEyeSlash, PiArrowRight } from "react-icons/pi";

interface Props {
  inputChange: (e: any) => void;
  errors: any;
  isFormValid?: boolean;
}

const FormLogin: FC<Props> = ({ inputChange, errors, isFormValid }) => {
  // const inputChange = () => {};

  const handleEyeClick = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex flex-col space-y-4 px-8 pb-9">
      <Input
        inputLabel="Email Address"
        labelClassname=" font-publicR text-sm "
        inputId="emailLogin"
        inputType="email"
        inputClass=" rounded-[2px] border border-[#E4E7E9] pl-2"
        handleChange={inputChange}
        errors={errors}
      />

      <Input
        inputLabel="Password"
        labelClassname=" font-publicR text-sm "
        inputId="passwordLogin"
        inputType={!isOpen ? "password" : "text"}
        inputClass=" rounded-[2px] border border-[#E4E7E9] pl-2"
        handleChange={inputChange}
        iconPwd={
          !isOpen ? (
            <PiEye
              size={20}
              className=" stroke-[0.5px]"
              color="#191C1F"
              onClick={handleEyeClick}
            />
          ) : (
            <PiEyeSlash
              size={20}
              className=" stroke-[0.5px]"
              color="#191C1F"
              onClick={handleEyeClick}
            />
          )
        }
        errors={errors}
      />

      {/* <PiEyeSlash /> */}

      <Button
        btnBg=" bg-orange-0"
        btnBorder=" rounded-[2px] "
        btnClass=" flex space-x-2 justify-center hover:space-x-3  "
        btnIconRight={<PiArrowRight size={20} color="white" className="" />}
        btnP=" py-[14px] "
        btnText=" font-publicB text-sm text-white"
        buttonText="SIGN IN"
        btnType="submit"
        // isDisable = {!isFormValid}
        // handleClick={handleLoginSubmit}
      />
    </div>
  );
};

export default FormLogin;
