import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeMatch = () => {

    const match = [
        {
            id:1,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:2,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:3,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:4,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:5,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:5,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:5,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
        {
            id:5,
            date: "02 OCTOMBER 2026, 15:00" ,
            team_1_img:"/images/home/latestmatch/fanatics.png",
            team_1_name: "FANTASTIC",
            team_1_countery:"United Status",
            team_2_img:"/images/home/latestmatch/ghadnigk.png",
            team_2_name: "GHADNIGK",
            team_2_countery:"United Kingdom"
        },
    ]

  return (
    // home latest martch section
    <section className='match-section py-25 bg-center bg-no-repeat object-cover bg-fixed text-white'
        style={{backgroundImage: "url('/images/home/latestmatch/matches-bg.jpg')"}}>

        <section className="containers">
            <div className='match-heading flex justify-between items-center'>
                <div className=''>
                    <h2 className='text-shadow text-3xl font-semibold text-white'>LATEST MATCHES</h2>
                </div>
                <div>
                    <ul className='flex gap-4 font-semibold cursor-pointer' >
                        <li>ALL MATCHES</li>
                        <li>UPCOMING</li>
                        <li>FINISHEDS</li>
                    </ul>
                </div>
            </div>
        </section>

        <div className='match-swiper mt-[40px]' >
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                autoplay={{ delay: 3000 }}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    480: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
            {match.map((item, index)=>(
                <SwiperSlide key={index}>
                    <div className=''>
                        <div className='card-head flex justify-between text-center py-[18px] px-[20px] bg-[#262931]'>
                            <div>
                                <h3 className='font-[600] text-[20px]'>{item.date}</h3>
                            </div>
                            <div className='flex  items-center gap-3'>
                                <span className='text-emerald-400'>watch</span>
                                <span><FaYoutube /></span>
                                <span><LuMessageSquareText /></span>
                            </div>
                        </div>

                        <div className='card-main bg-[#212529] py-[35px] px-[20px] text-center group'>
                            <ul className='flex items-center gap-5'>
                                <li>
                                    <img src={item.team_1_img} alt="" className='duration-1000 group-hover:rotate-y-[180deg]'
                                        style={{margin:"0 auto 20px", border:"1px solid #0be9c2", borderRadius:"50%", padding:"15px"}} 
                                    />
                                    <h3 className='font-[700]'>{item.team_1_name}</h3>
                                    <span className='text-emerald-400'>{item.team_1_countery}</span>
                                </li>

                                <li>
                                    <h2 className='text-[30px] font-[600]'>03:01</h2>
                                    <span>FINAL SCORE</span>
                                </li>

                                <li>
                                    <img src={item.team_2_img} alt="" className='duration-1000 group-hover:rotate-y-[180deg]'
                                        style={{margin:"0 auto 20px", border:"1px solid #0be9c2", borderRadius:"50%", padding:"15px"}}
                                    />
                                    <h3 className='font-[700]'>{item.team_1_name}</h3>
                                    <span className='text-emerald-400'>{item.team_2_countery}</span>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>   
        </div>
    </section>
  )
}

export default HomeMatch
