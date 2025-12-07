import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import { assets } from '../assets/assets';

const Product = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col gap-5 items-center   py-10 overflow-x-hidden overflow-y-hidden">
      <h2 className=' text-center text-3xl font-inter  font-bold text-white'>Our Products</h2>
      <div className="perspective-[1200px] w-[300px] h-[700px] sm:w-[350px] sm:h-[450px]   ">
        
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper h-[55vh]  sm:h-[55vh] rounded-2xl overflow-hidden shadow-slate-500  shadow-2xl sm:w-[20vw] mt-2"
        >
          {[
            assets.product9,
            assets.product8,
            assets.product5,
            assets.product3,
            // assets.product2,
            assets.product7,
            assets.product4,
            assets.product6,
            assets.product14,
            assets.product13,
            assets.product12,
            assets.product11,
            assets.product10
          ].map((img, index) => (
            <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
              <img 
                src={img} 
                alt={`product-${index}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Product;
