import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Success = () => {
  const { navigate } = useAppContext();
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-col m-auto items-center p-8 px-auto w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white mb-[177px] md:w-[700px]">
      <img
        className="mb-[20px]"
        src={assets.success}
        alt="authorization_success"
      />
      <p className="text-[20px] font-medium mb-[30px]">Sign Up successfully</p>
      <button
        onClick={login}
        className="cursor-pointer w-full rounded-[5px] text-white bg-black py-[15px] font-medium"
      >
        Login
      </button>
    </div>
  );
};

export default Success;
