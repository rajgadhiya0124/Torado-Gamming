import React, { useEffect, useState } from 'react'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeHero = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const hero = [
        {
            id:1,
            bg_image: "/images/home/hero/hero-bg-1.jpg",
            hero_logo:"/images/home/hero/hero-logo.png",
            title: "WELCOME TO TORADO GAMMING COMPANY",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae perspiciatis quam nobis at adipisci modi harum temporibus"
        },
        {
            id:2,
            bg_image: "/images/home/hero/hero-bg-2.jpg",
            hero_logo:"/images/home/hero/hero-logo.png",
            title: "ARE YOU RREADY FOR NEW JOURNY?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae perspiciatis quam nobis at adipisci modi harum temporibus"
        },
        {
            id:3,
            bg_image: "/images/home/hero/hero-bg-3.jpg",
            hero_logo:"/images/home/hero/hero-logo.png",
            title: "ARE YOU READY FOR NEW CHALLENGE?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae perspiciatis quam nobis at adipisci modi harum temporibus"
        },
    ]


  return (
    // <section> hero section
        <section className="relative">
            <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                onSlideChange={(swiper)=>setActiveIndex(swiper.realIndex)}
            >
            {hero.map((item, index)=>(
            <SwiperSlide key={item.id}>
                <div className="relative w-full h-[100vh]">
                    <img
                        src={item.bg_image}   
                        alt="Hero 1"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 flex items-center ">
                        <div className="max-w-[720px] m-auto px-5 text-center text-white 
                            flex flex-col items-center justify-center text-center">
                        
                            <img src="/images/home/hero/hero-logo.png" alt="" 
                                className={`transition-all duration-700 ${
                                    activeIndex === index ?  "translate-y-0 ":  "-translate-y-10 opacity-0"    
                                }`}
                            />
                            {/* text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  */}
                            <h2 className={`font-bold mt-4 transition-all duration-700 delay-200  leading-none
                                text-[18px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px]
                                ${activeIndex === index ? "translate-x-0" : "-translate-x-20"}`}>
                                {item.title}
                            </h2>
                            
                            <p className={`mb-6 mt-4 transition-all duration-700
                                text-sm sm:text-base md:text-lg
                                ${activeIndex === index ? "translate-x-0" : "translate-x-20"}`}>
                                {item.description}
                            </p>

                            <button className={`bg-emerald-400 text-black font-semibold 
                                text-xs sm:text-sm   px-6 py-3 sm:px-8 sm:py-3 
                                rounded-4xl hover:bg-gray-200  transition-all duration-700 delay-200
                                ${activeIndex === index ?  "translate-y-0 ": "translate-y-10 opacity-0"}`}>
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
            </Swiper>
            
            {/* navigattion button */}
            <div className="felx items-center">
                <div className="custom-prev absolute left-15 lg:left-20 lg:top-1/2 bottom-4 lg:bottom-auto 
                        -translate-y-1/2 z-10 
                    w-12 h-12 flex items-center justify-center cursor-pointer text-2xl text-emerald-400 bg-emerald-300/30 hover:bg-white/50 p-3  rounded-full">
                    <MdOutlineKeyboardArrowLeft />
                </div>

                <div className="custom-next absolute right-15 lg:right-20 lg:top-1/2 bottom-6 lg:bottom-auto 
                -translate-y-1/2 z-10 
                w-12 h-12 flex items-center justify-center cursor-pointer text-2xl text-emerald-400 bg-emerald-300/30 hover:bg-white/50 p-3 rounded-full">
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </section>
    // </section>
  )
}

export default HomeHero
