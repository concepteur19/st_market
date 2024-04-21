import React from "react";

// components
import SearchBar from "@/components/Base/navBar_basis/searchBar";
import Select from "@/components/Shared/Select";

// react-icons
import { BsChevronDown } from "react-icons/bs";

const SearchSort = () => {
  const handleSelectChange = () => {};

  const categories = [
   "12", "er", "er", "er", "er" ];

  return (
    <div className=" flex justify-between w-full font-publicR">
      <SearchBar
        shadow="shadow-none "
        border="border border-black-4 py-[11.5px]"
        searchBarWidth=" w-[34.36%]"
      />

      <div className="flex items-center space-x-[22px]">
        <label htmlFor="" className=" text-black-0">
          {" "}
          Sort by:{" "}
        </label>
        <Select
          sltDivClass=" text-black-2 border border-black-4"
          sltBg=""
          sltPd="py-[14px] pr-12 pl-6"
          sltBr=" rounded-[2px]"
          sltIcon={
            <BsChevronDown
              color="#191C1F"
              size={16}
              className=" stroke-[0.5px] "
            />
          }
          iconPosition="right-4"
          options={categories}
          defaultOption="Most Popular"
          onSelectChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default SearchSort;
