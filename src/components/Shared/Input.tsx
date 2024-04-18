import React, { ReactNode } from "react";

// react-icons
import { PiInfo } from "react-icons/pi";

interface InputProps {
  inputType: string;
  inputClass?: string;
  placeholder?: string;
  inputLabel?: string;
  inputId: string;
  labelClassname?: string;
  iconPwd?: ReactNode;
  signupref?: string;
  errors?: any;
  handleChange: (e: any) => void;
}

const Input = ({
  // handleChange,
  inputType,
  inputClass,
  placeholder,
  inputLabel,
  inputId,
  labelClassname,
  iconPwd,
  signupref,
  errors,
  handleChange,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2 relative">
      {inputLabel && (
        <div className="flex justify-between">
          <label htmlFor={inputId} className={labelClassname}>
            {inputLabel}
          </label>

          {iconPwd && !signupref && (
            <span className=" font-publicSB text-blue-2 text-sm">
              Forgot Password
            </span>
          )}
        </div>
      )}
      <input
        id={inputId}
        type={inputType}
        name={inputId}
        onChange={(e) => handleChange(e)}
        className={inputClass + " py-2" + " focus:outline-none"}
        placeholder={placeholder}
      />

      {errors && errors.hasOwnProperty(inputId) && (
        <p className="text-xs text-red-600 font-publicSB flex items-center space-x-1">
          {" "}
          {errors[inputId] && <PiInfo size={18} />} <span>{errors[inputId]}</span>
        </p>
      )}

      {iconPwd && (
        <div className=" absolute top-[2.5em] right-5 transform translate-x-1/2 ">
          {iconPwd}
        </div>
      )}
    </div>
  );
};

export default Input;
