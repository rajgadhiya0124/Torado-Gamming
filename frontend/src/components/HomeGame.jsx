import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const HomeGame = () => {

    const game = [
        {
            id:1,
            game_image:"/images/home/game/games-1.jpg",
            game_name:"RECORE FIGHT",
            relase_date:"10 Octomber, 2025",
            platform:"PlayStation 5",
            Genre: "Action"
        },
        {
            id:2,
            game_image:"/images/home/game/games-2.jpg",
            game_name:"SHOOYING HERO 4",
            relase_date:"09 Octomber, 2025",
            platform:"X Box Series X",
            Genre: "Action"
        },
        {
            id:3,
            game_image:"/images/home/game/games-3.jpg",
            game_name:"LAST DEAD MISSION",
            relase_date:"08 Octomber, 2025",
            platform:"PlayStation 4",
            Genre: "Action"
        },
        {
            id:4,
            game_image:"/images/home/game/games-1.jpg",
            game_name:"RECORE FIGHT",
            relase_date:"10 Octomber, 2025",
            platform:"PlayStation 5",
            Genre: "Action"
        },
    ]


  return (
    //home game section
    <section className='relative py-20 bg-[#151519] text-white'>
        <section className="containers">

            <div>
                <h2 className='text-shadow text-3xl font-semibold text-white'>LATEST GAMES</h2>
            </div>

            <div className='game-swipr mt-[30px]'>
                <Swiper
                    modules={[Autoplay,Navigation]}
                    spaceBetween={20}
                    autoplay={{ delay: 3000 }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    loop={true}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                {game.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <div>
                            <div>
                                <img src={item.game_image} style={{width:"100%"}} alt="" />
                            </div> 
                            <div className='p-[30px] bg-[#1e2024]'>
                                <h3 className='text-[24px] font-[700]'>{item.game_name}</h3>

                                <ul>
                                    <li>
                                        <span className='text-emerald-400 text-[18px] font-[600]'>Release Date: </span>
                                        <span>{item.relase_date}</span>
                                    </li>
                                    <li>
                                        <span className='text-emerald-400 text-[18px] font-[600]'>Platforms: </span>
                                        <span>{item.platform}</span>
                                    </li>
                                    <li>
                                        <span className='text-emerald-400 text-[18px] font-[600]'>Genre: </span>
                                        <span>{item.Genre}</span>
                                    </li>
                                </ul>

                                <div className='flex justify-between mt-[25px]'>
                                    <button className='flex gap-3 items-center bg-white text-black rounded-4xl px-[20px] py-[12px] cursor-pointer'>
                                        <img src="/images/home/game/play-store.png" style={{width:"25px"}} alt="" />
                                        <span className='font-[600]'> Play Store </span>
                                    </button>
                                    <button className='flex gap-3 items-center bg-white text-black rounded-4xl px-[20px] py-[12px] cursor-pointer'>
                                        <img src="/images/home/game/app-store.png"  style={{width:"25px"}} alt="" />
                                        <span className='font-[600]'> Apple Store </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                {/* navigattion button */}
                <div className="custom-prev absolute left-15 lg:left-30 lg:top-1/2 bottom-4 lg:bottom-auto 
                        -translate-y-1/2 z-10  border-2
                        w-12 h-12 flex items-center justify-center cursor-pointer text-2xl text-emerald-400 p-3  rounded-full">
                    <MdOutlineKeyboardArrowLeft />
                </div>
    
                <div className="custom-next absolute right-15 lg:right-30 lg:top-1/2 bottom-6 lg:bottom-auto 
                    -translate-y-1/2 z-10 border-2
                    w-12 h-12 flex items-center justify-center cursor-pointer text-2xl text-emerald-400 p-3 rounded-full">
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </section>
    </section>
  )
}

export default HomeGame
