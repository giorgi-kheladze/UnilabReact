import React, { useState } from "react";
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
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-20">
        <p className="text-gray-500 text-sm sm:text-base mt-4">
          <span>Home</span> /<span> Shop</span> /
          <span> {product.basicCategory}</span> /
          <span className="text-black"> {product.category}</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-6">
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <div className="flex flex-row lg:flex-col gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>

            <div>
              <img
                className="w-[280px] max-w-md sm:max-w-lg object-cover"
                src={thumbnail}
                alt="Selected product"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-sm">
            <h1 className="text-2xl sm:text-3xl font-medium">{product.name}</h1>

            <div className="flex items-center gap-1 mt-2">
              {renderStars(product.rating)}
              <p className="text-base ml-2">{product.rating}/5</p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <p className="font-bold text-xl sm:text-2xl">${product.price}</p>
              <p className="font-bold text-xl sm:text-2xl text-gray-400 line-through">
                ${Math.floor(product.price / (1 - product.discount / 100))}
              </p>
              <div className="px-3 py-1 rounded-full text-[#FF3333] text-xs font-bold bg-red-200">
                -{product.discount}%
              </div>
            </div>

            <p className="text-sm mt-4 mb-4 text-gray-500">
              {product.description}
            </p>
            <div className="w-full h-px bg-gray-300 mb-4"></div>

            <div className="mb-4">
              <p className="text-gray-500 mb-1">Select Colors</p>
              <div className="flex gap-4">
                {product.colors.map((color, index) => (
                  <div
                    onClick={() => setColorSelected(color)}
                    key={index}
                    className="relative w-9 h-9 rounded-full cursor-pointer flex items-center justify-center"
                    style={{ background: color }}
                  >
                    {colorSelected === color && (
                      <img src={assets.choose} alt="chosen" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-gray-300 mb-4"></div>

            <div className="mb-4">
              <p className="text-gray-500 mb-1">Choose Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    onClick={() => setSelected(size)}
                    className={`px-6 py-2 rounded-full ${
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

            <div className="w-full h-px bg-gray-300 mb-4"></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <div className="flex w-full sm:w-48 items-center justify-between bg-[#F0F0F0] px-6 py-3 rounded-full">
                <button
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                  className="text-xl"
                >
                  -
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)} className="text-xl">
                  +
                </button>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 font-medium bg-black text-white rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 mb-6">
          <ul className="flex flex-col sm:flex-row justify-between border-b border-gray-300 text-center">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer pb-2 flex-1 ${
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
