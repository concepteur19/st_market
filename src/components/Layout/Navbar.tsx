import { FC } from "react";

// images
import logo from "../../../public/images/png/Icon.png";

// react-icons
import { PiHeartLight } from "react-icons/pi";
import { PiUserLight } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { SlEarphones } from "react-icons/sl";
import { PiInfo } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";

// components
import SearchBar from "@/components/Base/navBar_basis/searchBar";
import ShoppingCartIcon from "@/components/Base/navBar_basis/shoppingCartIcon";
import Select from "@/components/Shared/Select";
import Logo from "../Shared/Logo";

const Navbar: FC = () => {
  const handleSelectChange = () => {};

  const categories = [
    { value: "12", label: "er" },
    { value: "12", label: "er" },
    { value: "12", label: "er" },
    { value: "12", label: "er" },
    { value: "12", label: "er" },
  ];

  return (
    <div className=" flex flex-col w-full">
      <div className="bg-blue-1 px-[15.625%] py-5 flex justify-between items-center">
        <Logo 
            logo={logo}
            textColor=" text-[#ffffff]"
        />
        <div className=" w-[45%]">
          <SearchBar />
        </div>
        <div className=" flex items-center justify-end space-x-6">
          <span className=" cursor-pointer">
            <ShoppingCartIcon />
          </span>
          <span className=" cursor-pointer">
            <PiHeartLight color="#ffffff" size={32} />
          </span>
          <span className=" cursor-pointer">
            <PiUserLight color="#ffffff" size={32} />
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-between py-4 px-[15.625%] text-black-1 text-sm font-publicR border-b border-b-black-4 ">
        <div className="flex space-x-6">
          <Select
            sltDivClass=" text-[#191C1F]"
            sltBg=" bg-black-3"
            sltPd="py-[14px] pr-12 pl-6"
            sltBr=" rounded-[2px]"
            sltIcon={
              <BsChevronDown
                color="#191C1F"
                size={16}
                className=" stroke-[0.5px] "
              />
            }
            options={categories}
            defaultOption="All Category"
            onSelectChange={handleSelectChange}
          />

          <span className=" flex items-center space-x-[6px]">
            <SlEarphones size={22} className=" stroke-[0.5px] " />
            <span>Customer Support</span>
          </span>
          <span className=" flex items-center space-x-[6px]">
            <PiInfo size={24} className=" stroke-[0.5px] " />
            <span>Need Help</span>
          </span>
        </div>
        <div className="flex items-center space-x-2 text-black-0">
          <PiPhoneCall color="#191C1F" size={24} className=" stroke-[0.5px]" />
          <span>+237651845871</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
