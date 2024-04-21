import React from "react";
import { RxCross2 } from "react-icons/rx";

interface FilterProps {
  filterSelected?: string[];
  resultFound?: number;
}

const ActiveFilter: React.FC<FilterProps> = ({ filterSelected, resultFound }) => {
  return (
    <div className="text-black-0 px-6 py-3 bg-black-3 flex justify-between w-full">
      <div className="flex space-x-4">
        <span className="text-[#5F6C72]">Active Filters: </span>
        {filterSelected && filterSelected.map((filter: any, index: number) => {
          return (
            <div
              key={"filter-" + index}
              className=" flex items-center space-x-[6px] "
            >
              <span>{filter}</span>
              <span className=" p-[5.25px] cursor-pointer">
                <RxCross2 size={12} color="#929FA5" />
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex space-x-1 items-end ">
        <span className="font-publicSB">{resultFound && resultFound}</span>
        <span className="text-[#5F6C72] ">Result(s) found</span>
      </div>
    </div>
  );
};

export default ActiveFilter;
