import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadImage(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative">
      {loadImage && (
        <>
          <img
            src={assets.banner}
            alt="banner"
            className="w-full hidden md:block"
            loading="eager"
          />
          <img
            src={assets.banner_sm_img}
            alt="small-banner"
            className="w-full md:hidden"
            loading="eager"
          />
          <img
            src={assets.banner_main_large}
            alt="star"
            className="hidden md:block md:absolute top-[86px] right-[81px]"
            loading="lazy"
          />
          <img
            src={assets.banner_main_small}
            alt="star"
            className="hidden md:block md:absolute top-[297px] right-[530px]"
            loading="lazy"
          />
        </>
      )}

      <div className="absolute top-[60px] left-[100px]">
        <h1 className="text-[32px] leading-[40px] sm:text-[64px] sm:leading-[64px] max-w-[577px] font-bold mb-[28px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="max-w-[550px] leading-[24px] text-gray-500 mb-[28px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="button bg-black text-white rounded-full cursor-pointer mb-[40px] px-[67px] py-[15px]">
          Shop Now
        </button>
        <div className="flex gap-[16px] items-center">
          <div>
            <h2 className="text-[40px]">200+</h2>
            <p className="text-gray-500">International Brands</p>
          </div>
          <div className="h-[74px] w-[.5px] bg-gray-400"></div>
          <div>
            <h2 className="text-[40px]">2,000+</h2>
            <p className="text-gray-500">High-Quality Products</p>
          </div>
          <div className="h-[74px] w-[.5px] bg-gray-400"></div>
          <div>
            <h2 className="text-[40px]">30,000+</h2>
            <p className="text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
