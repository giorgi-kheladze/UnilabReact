import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";

const ProductView = () => {
  const [selected, setSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const [count, setCount] = useState(1);

  const [activeTab, setActiveTab] = useState("Rating & Reviews");

  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

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

  const product = {
    name: "One Life Graphic T-shirt",
    basicCategory: "Men",
    category: "T-shirst",
    price: 260,
    discount: 40,
    rating: 4.5,
    images: [
      assets.product_detail1,
      assets.product_detail2,
      assets.product_detail3,
    ],
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: ["#4F4631", "#314F4A", "#31344F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  };

  const [thumbnail, setThumbnail] = useState(product.images[0]);

  return (
    product && (
      <div className="max-w-6xl w-full px-[100px]">
        <p className="text-gray-500">
          <span>Home</span> /<span> Shop</span> /
          <span> {product.basicCategory}</span> /
          <span className="text-black"> {product.category}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="w-[112px] cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div>
              <img
                className="w-[450px]"
                src={thumbnail}
                alt="Selected product"
              />
            </div>
          </div>

          {/*  */}
          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            <div className="flex items-center gap-0.5 mt-1">
              {renderStars(product.rating)}
              <p className="text-base ml-2">{product.rating}/5</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <p className="font-bold text-[24px]">${product.price}</p>
              <p className="font-bold text-[24px] text-gray-400 line-through">
                ${Math.floor(product.price / (1 - product.discount / 100))}
              </p>
              <div className="px-[13px] py-[6px] rounded-full text-[#FF3333] text-[12px] font-bold bg-red-200">
                -{product.discount}%
              </div>
            </div>

            <p className="text-[14px] mt-[10px] mb-[10px] text-gray-500">
              {product.description}
            </p>

            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div>
              <p className="text-gray-500">Select Colors</p>
              <div className="flex gap-[16px]">
                {product.colors.map((color, index) => (
                  <div
                    onClick={() => setColorSelected(color)}
                    key={index}
                    className="relative w-[37px] h-[37px] rounded-full cursor-pointer flex items-center justify-center"
                    style={{ background: color }}
                  >
                    {colorSelected === color && (
                      <img src={assets.choose} alt="choosen" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div>
              <p className="text-gray-500">Choose Size</p>
              <div className="flex gap-[12px]">
                {product.sizes.map((size, index) => (
                  <button
                    onClick={() => setSelected(size)}
                    className={`px-[24px] py-[12px] rounded-full cursor-pointer ${
                      selected === size
                        ? "bg-black text-white"
                        : "bg-[#F0F0F0] text-black"
                    }`}
                    key={index}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>
            <div className="flex items-center mt-10 gap-4 text-base">
              <div className="flex w-[170px] items-center justify-between bg-[#F0F0F0] px-[20px] py-[15px] rounded-full">
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
              <button className="w-full py-3.5 cursor-pointer font-medium bg-black text-white rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-[80px] mb-[24px]">
          <ul className="flex justify-between border-b border-gray-300">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer pb-2 text-center flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-black font-medium"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ProductView;
