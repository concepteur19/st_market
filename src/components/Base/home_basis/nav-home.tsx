import Link from "next/link";
import React from "react";

// react-icons
import { PiArrowRight } from "react-icons/pi";

interface NavHomeProps {
  activePath: string;
  categories: string[];
  handleClick: (category: string) => void;
}

const NavHome: React.FC<NavHomeProps> = ({
  activePath,
  handleClick,
  categories,
}) => {
  const limitedCategories = categories.slice(0, 5);

  return (
    <div className="flex justify-between text-sm font-publicR ">
      <div className=" space-x-4">
        <button
          className={`p-2 rounded-md text-black-0 hover:bg-orange-0 hover:text-white ${
            activePath === "all" ? "bg-orange-0 text-white" : ""
          }`}
          onClick={() => handleClick("all")}
        >
          All Category
        </button>
        {categories &&
          limitedCategories.map((category) => (
            <button
              key={category}
              className={`p-2 rounded-md text-black-0 hover:bg-orange-0 hover:text-white ${
                activePath === category ? "bg-orange-0 text-white" : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          ))}
      </div>

      <button className=" flex items-center space-x-2 p-2 rounded-md text-orange-0 hover:bg-orange-0 hover:text-white font-publicSB">
        <Link href={"/products"}>Browse All Products</Link>{" "}
        <span>
          <PiArrowRight size={18} className=" text" />
        </span>
      </button>
    </div>
  );
};

export default NavHome;
