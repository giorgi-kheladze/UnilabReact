import React from "react";
import { assets } from "../assets/assets";

const NavbarBanner = () => {
  return (
    <div className="w-full h-[38px] flex items-center justify-center bg-black">
      <div className="flex gap-[8px] text-white text-[12px] md:text-[14px]">
        <p>Sign up and get 20% off to your first order.</p>
        <p className="underline cursor-pointer">Sign Up Now</p>
      </div>
      <img
        src={assets.cancel}
        alt=""
        className="hidden md:block md:absolute right-[100px] cursor-pointer"
      />
    </div>
  );
};

export default NavbarBanner;
