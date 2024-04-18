import React from "react";

//react-icons
import { BiSolidPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex flex-col justify-start">
      <span className=" font-publicB text-lg mb-10">Contact</span>

      <ul className=" flex flex-col space-y-5 ">
        <li className="flex items-center space-x-4">
          <BiSolidPhone size={24} />
          <span>+237651845871</span>
        </li>
        <li className="flex items-center space-x-4">
          <IoMail size={24} />
          <span>st_market@gmail.com</span>
        </li>
        <li className="flex items-center space-x-4">
          <FaLocationDot size={24} />
          <span>Douala, MTN Dubai</span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
