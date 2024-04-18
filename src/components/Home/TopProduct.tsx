import React, { useEffect, useState } from "react";

// image
import imageTop from "../../../public/images/png/top.png";
import imagebottom from "../../../public/images/png/cardBottom.png";

// component
import CardProductTop, {
  CardProductTopProps,
} from "../Base/home_basis/card-product-top";

const items: CardProductTopProps[] = [
  { price: 299, name: "Xbox Consoles", imagesrc: imageTop },
  { price: 1999, name: "Macbook Pro", imagesrc: imagebottom },
  {
    price: 1538,
    name: "4K UHD LED Smart",
    imagesrc: imageTop,
  },
];

const TopProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const ActiveItem = items[activeIndex];

  return (
    <div className=" relative p-14 rounded-[6px] bg-black-3 ">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : " opacity-0 hidden"
            }`}
          >
            <CardProductTop
              key={item.price + "-" + index}
              price={item.price}
              name={item.name.slice(0, 16)}
              imagesrc={item.imagesrc}
            />
          </div>
        );
      })}

      <div className="absolute bottom-[56px] space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={
              `w-[10px] h-[10px] rounded-full bg-black-0 transition-colors duration-500 
               ${
              index === activeIndex ? 'bg-black' : 'bg-gray-500'
            }
             `}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopProduct;
