import React from "react";

// components
import FooterTitle from "./footerTitle";

interface ListProps{
    listTab: string[],
    title: string     
}

const FooterList = ({listTab, title}: ListProps) => {
  return (
    <div className="flex flex-col justify-start">
      <FooterTitle 
        title={title}
      />

      <ul className=" flex flex-col space-y-5 ">
        {listTab.map((listMenu) => {
            return <li key={listMenu}>{listMenu}</li>
        })}
      </ul>
    </div>
  );
};

export default FooterList;
