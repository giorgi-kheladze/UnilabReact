import React, { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { assets } from "../assets/assets";

const Revies = () => {
  const [rewius, setRewius] = useState([]);
  useEffect(() => {
    fetch("https://6816738a26a599ae7c37ea2b.mockapi.io/unilab/rewius")
      .then((res) => res.json())
      .then((data) => setRewius(data))
      .catch((err) => console.log(err));
  }, []);

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
    <div className="relative mb-[140px] sm:mb-[140px] md:mb-[170px]">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[100px] mb-[24px] sm:mb-[40px] gap-4 sm:gap-0">
        <h3 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center sm:text-left">
          OUR HAPPY CUSTOMMERS
        </h3>
        <div className="flex gap-[16px]">
          <img
            className="swiper-prev-btn cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            className="swiper-next-btn cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_rigth"
          />
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full w-[100px] z-10 pointer-events-none bg-white/40 backdrop-blur-[2px]" />
      <div className="absolute right-0 top-0 h-full w-[100px] z-10 pointer-events-none bg-white/40 backdrop-blur-[2px]" />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        effect={"coverflow"}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={6500}
        freeMode={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-next-btn",
          prevEl: ".swiper-prev-btn",
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = ".swiper-prev-btn";
          swiper.params.navigation.nextEl = ".swiper-next-btn";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {rewius.map((user) => (
          <SwiperSlide className="max-w-[350px] min-h-[280px] border border-gray-400 rounded-[20px] py-[28px] px-[32px]">
            <div>
              {renderStars(user.rating)}
              <div className="flex items-end gap-[4px]">
                <h3 className="mt-[15px] text-[20px] font-bold">{user.name}</h3>
                <img src={assets.happy} alt="rewie" />
              </div>
              <p className="mt-[12px] text-gray-500">"{user.description}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Revies;
