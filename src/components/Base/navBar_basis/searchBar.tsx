import { FC } from "react";

// components
import Input from "@/components/Shared/Input";

// react-icons
import { CiSearch } from "react-icons/ci";

const searchBar: FC = () => {
  const searchBarChange = () => {};
  const searchBarClick = () => {};

  return (
    <div className=" flex items-center w-full">
      <Input
        inputId="searchBar"
        inputType="text"
        placeholder="Search for anything..."
        handleChange={searchBarChange}
        inputClass="w-full bg-[white] pl-5 py-[14px] rounded-[2px] text-sm shadow-md"
      />

      <CiSearch color="#191C1F" size={20} className=" stroke-[0.5px] cursor-pointer relative -left-9" onClick={searchBarClick}/>
    </div>
  );
};

export default searchBar;