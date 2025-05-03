import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  //   const { user, setUser } = useAppContext();
  return (
    <div className="px-[16px] py-[20px] md:px-[100px] md:py-[24px]">
      <nav className="navbar flex items-center justify-between relative transition-all">
        <div className="hidden sm:flex items-center md:flex justify-between w-full">
          <img src={assets.logo} alt="logo" />
          <div className="flex gap-[24px] text-[14px]">
            <NavLink to="/" className="flex gap-[4px]">
              Shop
              <img src={assets.arrow_bottom} alt="arrow" />
            </NavLink>
            <NavLink to="/sale">On Sale</NavLink>
            <NavLink to="/arrivals">New Arrival</NavLink>
            <NavLink to="/brands">Brands</NavLink>
          </div>

          <div className="hidden lg:flex items-center text-sm gap-2 bg-[#F0F0F0] rounded-full w-[480px] px-[16px] py-[12px]">
            <img src={assets.search} alt="search" />
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search for products..."
            />
          </div>

          <div className="flex gap-[14px]">
            <div className="relative cursor-pointer">
              <img src={assets.basket} alt="basket" />
              <button className="absolute -top-1.5 -right-2 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">
                0
              </button>
            </div>
            <img src={assets.person} alt="person" className="cursor-pointer" />
          </div>
        </div>

        <div
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="flex justify-between w-full sm:hidden"
        >
          {/* Menu Icon SVG */}
          <div className="flex gap-[16px]">
            <img src={assets.menu_icon} alt="menu_icon" />
            <img src={assets.logo} alt="menu_loog" className="w-[126px]" />
          </div>
          <div className="flex gap-[12px]">
            <img src={assets.search_sm} alt="search" />
            <img src={assets.basket} alt="basket" />
            <img src={assets.person} alt="person" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink onClick={() => setOpen(false)} to="/sale">
            About
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/sale">
            On Sale
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/arrivals">
            New Arrival
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/brands">
            Brands
          </NavLink>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
