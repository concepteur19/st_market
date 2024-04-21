import { FC } from "react";

// components
import Input from "@/components/Shared/Input";

// react-icons
import { CiSearch } from "react-icons/ci";

interface searchBarProps {
  shadow?: string,
  searchBarWidth?: string,
  border?: string
}

const searchBar: FC<searchBarProps> = ({searchBarWidth, shadow, border}) => {
  const searchBarChange = () => {};
  const searchBarClick = () => {};

  return (
    <div className={`relative flex items-center ${searchBarWidth}`}>
      <Input
        inputId="searchBar"
        inputType="text"
        placeholder="Search for anything..."
        handleChange={searchBarChange}
        inputClass={`pl-5 py-[14px] rounded-[2px] text-sm shadow-md ${shadow} ${border}`}
      />

      <CiSearch color="#191C1F" size={20} className=" stroke-[0.5px] cursor-pointer absolute right-5" onClick={searchBarClick}/>
    </div>
  );
};

export default searchBar;