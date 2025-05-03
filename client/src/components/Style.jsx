import React from "react";
import { assets } from "../assets/assets";

const Style = () => {
  return (
    <div className="mx-[100px] my-[80px] bg-[#F0F0F0] rounded-[40px] px-[64px] py-[70px]">
      <h3 className="text-[48px] font-bold text-center mb-[64px]">
        BROWSE BY DRESS STYLE
      </h3>
      <div className="grid gap-[20px]">
        <div className="flex gap-[20px]">
          <img className="max-h-[230px]" src={assets.casual} alt="casual" />
          <img className="max-h-[230px]" src={assets.formal} alt="formal" />
        </div>
        <div className="flex gap-[20px]">
          <img className="max-h-[230px]" src={assets.party} alt="party" />
          <img className="max-h-[230px]" src={assets.gym} alt="gym" />
        </div>
      </div>
    </div>
  );
};

export default Style;
