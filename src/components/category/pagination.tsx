import React, { useState } from "react";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { Button, IconButton } from "@material-tailwind/react";

interface paginationProps {
  // nbrOfItems: number;
  active: number;
  // startIndex: number;
  // endIndex: number;
  // currentSanctions: Product[];
  totalPages: number;
  changePage: (page: number) => void;
  next: () => void;
  prev: () => void;
}

const Pagination: React.FC<paginationProps> = ({active, totalPages, changePage, next, prev}) => {
  

  //   const findTrueIdProduct = (id: number) => {
  //     // étant donné que le tableau est divisé en plusieurs tableau de n elts,
  //     // chaque tableau commence avec un index à 0 pour son premier élt, ce qui est problématique,
  //     // ici il est question de retrouver l'index reel de l'élément dans le tableau originel
  //     let trueId = id;
  //     if (active > 1) {
  //       const currentPage = active - 1;
  //       trueId = itemsPerPage * currentPage + id;
  //       console.log(trueId);
  //     }

  //     const foundSanction = products.find((product, index: number) => {
  //       return trueId === index;
  //     });

  //     console.log(foundSanction);
  //   };
  const getPageButtonClass = (pageNumber: number) => {
    return pageNumber === active ? "bg-blue-500 text-white" : "bg-gray-200";
  };

  return (
    <div className=" flex space-x-5 justify-center">
      <button
        className=" border-[1.5px] border-orange-0 rounded-full p-2 cursor-pointer hover:bg-orange-0 text-orange-0  hover:text-white"
        onClick={prev}
        disabled={active === 1}
      >
        {" "}
        <PiArrowLeft size={24} />
      </button>
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <IconButton
            key={"pagination-" + index + 1}
            onClick={() => changePage(index + 1)}
            className={`border-[1.5px] border-black-4 rounded-full p-[10px] cursor-pointer hover:bg-orange-0 text-orange-0 w-10 h-10  hover:text-white font-publicR text-sm ${getPageButtonClass(
              index + 1
            )} ${
              active === index + 1 ? "bg-orange-0 text-white" : "text-black-0 bg-white "
            }`}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <button
        className=" border-[1.5px] border-orange-0 rounded-full p-2 cursor-pointer hover:bg-orange-0 text-orange-0  hover:text-white"
        onClick={next}
        disabled={active === totalPages}
      >
        {" "}
        <PiArrowRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;
