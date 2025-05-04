import React from "react";
import { assets, products } from "../assets/assets";
import Button from "./Button";

const Similar = () => {
  const randomElements = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`full-${i}`}
          src={assets.star}
          alt="star"
          className="w-4 inline-block"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <img
          key="half"
          src={assets.star_half}
          alt="half star"
          className="w-2 inline-block"
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full mb-[168px]">
      <h2 className="text-center text-[48px] mt-[72px] mb-[52px] font-bold">
        YOU MIGHT ALSO LIKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] px-[100px]">
        {randomElements.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto mb-4 rounded cursor-pointer"
            />
            <h3 className="font-bold mb-1">{item.title}</h3>
            <div className="flex items-center gap-1 mb-1">
              {renderStars(item.rating)}
              <p className="ml-2 text-[14px]">
                {item.rating}/<span className="text-gray-500">5</span>
              </p>
            </div>
            {item.discount ? (
              <div className="flex items-center gap-[10px]">
                <p className="font-bold text-[24px]">${item.price}</p>
                <p className="font-bold text-[24px] text-gray-400 line-through">
                  ${Math.floor(item.price / (1 - item.discount / 100))}
                </p>
                <div className="px-[13px] py-[6px] rounded-full text-[#FF3333] text-[12px] font-bold bg-red-200">
                  -{item.discount}%
                </div>
              </div>
            ) : (
              <p className="font-bold text-[24px]">${item.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similar;
