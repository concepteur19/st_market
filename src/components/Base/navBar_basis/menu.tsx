import React from "react";

const Menu: React.FC = () => {

  return (
    <div className="border border-y-[#303055] border-x-transparent px-[52px]">
      <ul className=" flex justify-start space-x-4 pl-[10px] py-4 text-[#414552]">
        {/* <li className={`py-[2px]`}>
          {" "}
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className={`py-[2px]`}>
          {" "}
          <NavLink to="/payments">Payments</NavLink>{" "}
        </li>
        <li className={`py-[2px]`}>
          {" "}
          <NavLink to="/settings"> Settings </NavLink>{" "}
        </li> */}
      </ul>
    </div>
  );
};

export default Menu;
