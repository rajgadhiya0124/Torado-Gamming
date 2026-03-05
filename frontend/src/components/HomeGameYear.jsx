import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight  } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const HomeGameYear = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    // game of the year section
    <section className='relative py-25 bg-center bg-no-repeat bg-cover bg-fixed'
        style={{backgroundImage:("url('/images/home/gameyear/game-year-bg.jpg')")}}
    >
    <div className="absolute inset-0 bg-black/70"></div>

    <section className="containers relative z-10 ">
        <div className='text-center flex  items-center justify-between'>
            <div className="h-[2px] w-full bg-[#198754]"></div>

            <h2 className='text-shadow w-full text-3xl font-semibold text-white'>GAME OF THE YEAR</h2>

            <div className="h-[2px] w-full bg-[#198754]"></div>
        </div>

        <div className='grid grid-cols-4 gap-[20px] mt-[30px]'>
            <div className="gameyear-card">
                <div className='relative'>
                    <img src="/images/home/gameyear/game-year-1.jpg" alt="" />
                    <span className='absolute top-5 left-0 bg-[#0be9c280] text-white text-[14px] font-[700] px-[15px] py-[4px]'>
                        WINNER
                    </span>
                </div>
                <div className='gy-card group flex justify-center bg-[#1e2024] py-[30px] px-[30px] cursor-pointer'>
                    <img src="/images/home/gameyear/year-award-1.png" 
                        className='duration-500 group-hover:rotate-y-[360deg]'
                        alt="" 
                    />
                </div>  
            </div>

            <div className="gameyear-card">
                <div className='relative'>
                    <img src="/images/home/gameyear/game-year-2.jpg" alt="" />
                    <span className='absolute top-5 left-0 bg-[#0be9c280] text-white text-[14px] font-[700] px-[15px] py-[4px]'>
                        WINNER
                    </span>
                </div>
                <div className='gy-card group flex justify-center bg-[#1e2024] py-[30px] px-[30px] cursor-pointer'>
                    <img src="/images/home/gameyear/year-award-2.png" 
                         className='duration-500 group-hover:rotate-y-[360deg]'
                    alt="" />
                </div>  
            </div>

            <div className="gameyear-card">
                <div className='relative'>
                    <img src="/images/home/gameyear/game-year-3.jpg" alt="" />
                    <span className='absolute top-5 left-0 bg-[#0be9c280] text-white text-[14px] font-[700] px-[15px] py-[4px]'>
                        WINNER
                    </span>
                </div>
                <div className='gy-card group flex justify-center bg-[#1e2024] py-[30px] px-[30px] cursor-pointer'>
                    <img src="/images/home/gameyear/year-award-3.png" 
                         className='duration-500 group-hover:rotate-y-[360deg]'
                    alt="" />
                </div>  
            </div>

            <div className="gameyear-card">
                <div className='relative'>
                    <img src="/images/home/gameyear/game-year-4.jpg" alt="" />
                    <span className='absolute top-5 left-0 bg-[#0be9c280] text-white text-[14px] font-[700] px-[15px] py-[4px]'>
                        WINNER
                    </span>
                </div>
                <div className='gy-card group flex justify-center bg-[#1e2024] py-[30px] px-[30px] cursor-pointer '>
                    <img src="/images/home/gameyear/year-award-4.png" 
                        className='duration-500 group-hover:rotate-y-[360deg]'
                    alt="" />
                </div>  
            </div>
        </div>


        <div className='game-video-swiper relative mt-[100px]'>

            <Swiper
                modules={[Navigation]}
                // navigation={true}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                className="max-w-[1000px] mx-auto"
            >
            <SwiperSlide>
                <div className='relative h-[600px] py-20 bg-cover bg-center bg-no-repeat overflow-hidden'
                    style={{backgroundImage: "url('/images/home/gameyear/game-year-1.jpg')",
                        width:"100%"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <button 
                            className='text-[30px] text-emerald-400 border-[1px] rounded-full p-[22px] bg-[#0be9c280] cursor-pointer'
                            onClick={()=>setIsOpen(true)}
                        >
                            <FaPlay />
                        </button>
                    </div>
                </div>  
            </SwiperSlide>   
            <SwiperSlide>
                <div className='relative h-[600px] py-20 bg-cover bg-center bg-no-repeat overflow-hidden'
                    style={{backgroundImage: "url('/images/home/gameyear/game-year-1.jpg')"}}
                >
                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <button 
                            className='text-[30px] text-emerald-400 border-[1px] rounded-full p-[22px] bg-[#0be9c280] cursor-pointer'
                        >
                            <FaPlay />
                        </button>
                    </div>
                </div>  
            </SwiperSlide>   
            <SwiperSlide>
                <div className='relative h-[600px] py-20 bg-cover bg-center bg-no-repeat overflow-hidden'
                    style={{backgroundImage: "url('/images/home/gameyear/game-year-1.jpg')"}}
                >
                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className='absolute inset-0 flex items-center justify-center'>
                        <button 
                            className='text-[30px] text-emerald-400 border-[1px] rounded-full p-[22px] bg-[#0be9c280] cursor-pointer '>
                            <FaPlay />
                        </button>
                    </div>
                </div>  
            </SwiperSlide>   

            </Swiper>

            <div className="absolute top-1/2 left-5 z-20 -translate-y-1/2">
                <button className="custom-prev text-emerald-400 p-3 cursor-pointer">
                    <HiMiniArrowLongLeft size={65} />
                </button>
            </div>

            <div className="absolute top-1/2 right-5 z-20 -translate-y-1/2">
                <button className="custom-next  text-emerald-400 p-3 cursor-pointer ">
                    <HiMiniArrowLongRight size={65} />
                </button>
            </div>

           {/* video modal */}
           {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">

                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
                >
                    <RxCross2 />
                </button>

                {/* Video */}
                <div className="w-[100%] md:w-[900px] aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Game Trailer"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
            )}

        </div>
     </section>
    </section>
  )
}

export default HomeGameYear
