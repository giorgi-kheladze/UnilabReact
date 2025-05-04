import React, { use, useEffect } from "react";
import { useState } from "react";
import { assets } from "../assets/assets";

const AllRevius = () => {
  const [rewius, setRewius] = useState([]);
  useEffect(() => {
    fetch("https://6816738a26a599ae7c37ea2b.mockapi.io/unilab/rewius")
      .then((res) => res.json())
      .then((data) => setRewius(data))
      .catch((err) => console.log(err));
  }, []);

  const randomElements = [...rewius]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

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
    <div className="px-4 sm:px-8 md:px-12 lg:px-[100px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-[8px]">
          <p className="text-xl md:text-2xl font-medium">All Reviws</p>
          <p className="text-gray-500">(451)</p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          <button className="p-[12px] bg-gray-200 rounded-full cursor-pointer">
            <img src={assets.filter} alt="filter" />
          </button>
          <button className="flex items-center gap-[21px] px-[20px] py-[13px] bg-gray-200 rounded-full cursor-pointer">
            Latest <img src={assets.arrow_bottom} alt="arrow" />
          </button>
          <button className="bg-black text-white px-[29px] py-[13px] rounded-full cursor-pointer">
            Write a Review
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px]">
        {randomElements.map((user) => (
          <div className="relative px-[32px] py-[28px] border border-gray-300 rounded-[20px]">
            <img
              className="absolute top-[37px] right-[33px] cursor-pointer"
              src={assets.three_dot}
              alt=""
            />
            {renderStars(user.rating)}
            <div className="flex items-end gap-[4px]">
              <h3 className="mt-[15px] text-[20px] font-bold">{user.name}</h3>
              <img src={assets.happy} alt="rewie" />
            </div>
            <p className="text-gray-500">"{user.description}"</p>
            <p className="mt-[24px] text-gray-600">
              Posted on <span>{user.month}</span> <span>{user.day}</span>
              {", "}
              <span>{user.year}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRevius;
