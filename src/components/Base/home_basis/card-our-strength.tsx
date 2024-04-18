import React, { ReactNode } from "react";

export interface Props {
  title: string;
  content: string;
  icon: ReactNode;
  isLastItem?: boolean;
}

const CardOurStrength: React.FC<Props> = ({
  title,
  content,
  icon,
  isLastItem,
}) => {
  return (
    <div
      className={`${
        isLastItem && "border-r-black-4"
      } flex items-center space-x-4 border border-transparent  px-4 py-[6px] text-sm text-black-0  `}
    >
      {icon}
      <div className=" flex flex-col space-y-1 pr-16 ">
        <span className="font-medium">{title.toUpperCase()}</span>
        <span className=" text-black-1"> {content} </span>
      </div>
    </div>
  );
};

export default CardOurStrength;
