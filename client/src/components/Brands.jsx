import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { brands } from "../assets/assets";

const Brands = () => {
  return (
    <div className="brands w-full h-[122px] bg-black flex items-center justify-between px-[100px]">
      {brands?.map(({ endpoint, image }) => (
        <NavLink to={`/brands/${endpoint}`} key={endpoint}>
          <img
            src={image}
            alt={endpoint}
            className="cursor-pointer hover:scale-110 transition-all ease-in duration-300"
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Brands;
