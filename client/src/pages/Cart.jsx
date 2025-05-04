import React from "react";
import { useState } from "react";
import { assets, cart } from "../assets/assets";

const Cart = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p className="text-gray-500 ml-[16px] sm:ml-[100px] flex items-center">
        <span>Home</span> /<span className="text-black ml-[8px]">Cart</span>
      </p>
      <h3 className="text-[40px] font-bold ml-[16px] sm:ml-[100px] mb-[24px]">
        Your Cart
      </h3>
      <div className="flex flex-col md:flex-row max-w-6xl w-full px-6 mx-auto gap-[20px] mb-[170px]">
        <div className="flex-1 max-w-4xl border rounded-[20px] border-gray-300/70 px-[24px] py-[20px]">
          {cart.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm md:text-base font-medium pt-3"
            >
              <div className="flex items-center md:gap-6 gap-3">
                <div className="cursor-pointer w-24 h-24 flex items-center justify-center">
                  <img
                    className="max-w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div>
                  <p className="hidden md:block font-semibold">
                    {product.title}
                  </p>
                  <div className="font-norma">
                    <p className="text-[14px] text-black">
                      Size:{" "}
                      <span className="text-gray-500/70">{product.size}</span>
                    </p>
                    <div className="flex items-center">
                      <p className="text-[14px]">
                        Color:{" "}
                        <span className="text-gray-500/70">
                          {product.color}
                        </span>
                      </p>
                    </div>
                    <p className="text-[24px]">${product.price}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button className="cursor-pointer mx-auto">
                  <img src={assets.trash} alt="" />
                </button>
                <div className="flex w-[120px] items-center justify-between bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
                  <button
                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                    className="cursor-pointer"
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* comment */}
        <div className="max-w-[360px] w-full rounded-[20px] p-5 max-md:mt-16 border border-gray-300/70">
          <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>

          <div className="text-gray-500 mt-4 space-y-2">
            <p className="flex justify-between">
              Subtotal<span className="text-black font-bold">$565</span>
            </p>
            <p className="flex justify-between">
              Discount (-20$)
              <span className="text-[#FF3333] font-bold">-$113</span>
            </p>
            <p className="flex justify-between">
              Delivery Fee
              <span className="text-black font-bold">$15</span>
            </p>
            <hr className="border-gray-300 my-5" />
            <p className="flex justify-between text-lg font-medium mt-3">
              <span className="text-black">Total</span>
              <span className="text-black font-bold text-[24px]">$467</span>
            </p>
          </div>

          <div className="flex w-full justify-between gap-[8px] mt-[24px] mb-[24px]">
            <div className="hidden lg:flex items-center text-sm gap-2 bg-[#F0F0F0] rounded-full px-[16px] py-[10px]">
              <img src={assets.promo} alt="search" />
              <input
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Add promo code"
              />
            </div>
            <button className="bg-black text-white rounded-full px-[30px] py-[10px] cursor-pointer">
              Apply
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 w-full cursor-pointer py-[19px] rounded-full bg-black text-white">
            Go to Checkout
            <img src={assets.arrow_beside} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
