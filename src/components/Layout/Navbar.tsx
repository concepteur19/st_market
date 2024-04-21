import { FC, useContext, useState } from "react";

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

// context
import { categoryContext } from "@/context/CategoryContext";
import Link from "next/link";

const handleLogout = () => {
  // Handle logout logic (e.g., remove user token, redirect, etc.)
  console.log("Logging out...");
};

interface NavProps {
  onCategoryChange: (category: string) => void;
}

const Navbar: FC<NavProps> = ({ onCategoryChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = useContext(categoryContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className=" flex flex-col w-full">
      <div className="bg-blue-1 px-[15.625%] py-5 flex justify-between items-center">
        <Logo logo={logo} textColor=" text-[#ffffff]" />
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
          <span className="relative cursor-pointer">
            <PiUserLight color="#ffffff" size={32} onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className="absolute flex flex-col justify-center top-full -left-2 bg-white shadow-md rounded-[2px] w-36 ">
                <span className="p-4 hover:bg-gray-100 text-sm">
                  <Link href="/cart/userId">Liste des cartes</Link>
                </span>
                <span
                  className="p-4 hover:bg-gray-100 text-sm"
                  onClick={handleLogout}
                >
                  Déconnexion
                </span>
              </div>
            )}
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
            iconPosition="right-6"
            options={categories}
            defaultOption="All Category"
            onSelectChange={onCategoryChange}
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
