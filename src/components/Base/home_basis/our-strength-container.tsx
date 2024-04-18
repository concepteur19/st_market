import React from "react";

//  component
import CardOurStrength, { Props } from "./card-our-strength";

// react-icons
import { TbTruckDelivery } from "react-icons/tb";
import { PiCreditCardLight, PiTrophyLight } from "react-icons/pi";
import { SlEarphones } from "react-icons/sl";

const strengthData: Props[] = [
  {
    icon: <TbTruckDelivery size={40} color="#191C1F" className=" stroke-[1px]" />,
    title: "Fasted Delivery",
    content: "Delivery in 24/H",
  },
  {
    icon: <PiTrophyLight size={40} color="#191C1F"/>,
    title: "24 Hours Return",
    content: "100% money-back guarantee",
  },
  {
    icon: <PiCreditCardLight size={40} color="#191C1F"/>,
    title: "Secure Payment",
    content: "Your money is safe",
  },
  {
    icon: <SlEarphones size={32} color="#191C1F" />,
    title: "Support 24/7",
    content: "Live contact/message",
  },
];

const OurStrengthContainer = () => {
  return (
    <div className=" flex justify-between px-4 py-[26px] border border-black-4 rounded-[6px] ">
      {strengthData.map((item: Props, index) => {
        return (
          <CardOurStrength
            key={"ourStrength-" + index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            isLastItem = {index !== strengthData.length - 1 }
          />
        );
      })}
    </div>
  );
};

export default OurStrengthContainer;
