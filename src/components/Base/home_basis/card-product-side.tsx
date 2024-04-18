import React from "react";

const CardApproved = () => {
  return (
    <div
      className=" bg-[#D7F7C2] rounded text-xs px-[6px] flex space-x-1 items-center"
    >
      <span className=" text-[#006908]">Approved</span>
      <span className=" w-3 h-3 bg-[#228403] text-[#D7F7C2] flex items-center justify-center rounded-sm text-[10px] "> i </span>
    </div>
  );
};

export default CardApproved;
