import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import axios from 'axios';

const HomePartner = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [partners, setPartners] = useState([]);

    const fetchpartner = async()=>{
        try {   
            const res = await axios.get("http://localhost:8000/api/partner/getall");
            const ActivePartner = res.data.data.filter(
                (items)=> items.status === 1
            );
            
            setPartners(ActivePartner);
        } catch (error) {
            console.error("Error While Fetch Partner", error);
        }
    } 

    useEffect(()=>{
        fetchpartner();
    },[]);

//     const partners = [
//         "/images/partner/partner-1.png",
//         "/images/partner/partner-2.png",
//         "/images/partner/partner-3.png",
//         "/images/partner/partner-4.png",
//         "/images/partner/partner-5.png",
//         "/images/partner/partner-6.png",
//   ];

  return (
    //home partner section
    <section className='bg-[#1b1d21] text-white py-15'>
        <section className="containers">
            <div className='relative'>
                <h2 className='text-lg text-gray-300 text-center'>
                    Our Partners
                </h2>

                <div className="absolute top-20 left-[-40px] z-10 -translate-y-1/2">
                    <button
                        ref={prevRef}
                        className="bg-white/10 hover:bg-white/20 text-white 
                                w-10 h-10 rounded-full flex items-center 
                                justify-center transition cursor-pointer"
                    >
                        <MdOutlineKeyboardArrowLeft style={{color:"#0be9c2",fontSize:"30px"}}/>
                    </button>
                </div>

                <div className="absolute top-20 right-0 z-10 -translate-y-1/2">
                    <button
                        ref={nextRef}
                        className="bg-white/10 hover:bg-white/20 text-white 
                                w-10 h-10 rounded-full flex items-center 
                                justify-center transition cursor-pointer"
                    >
                        <MdOutlineKeyboardArrowRight style={{color:"#0be9c2",fontSize:"30px"}} />
                    </button>
                </div>
                
                <Swiper
                    className='mt-8 px-50'
                    modules={[Autoplay,Navigation]}
                    spaceBetween={25}
                    slidesPerView={5}
                    speed={1000}
                    autoplay={{delay:3000}}
                    loop={true}
                    onBeforeInit={(swiper)=>{
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}          
                >
                    {partners.map((item,index)=>(
                        <SwiperSlide key={index} className='flex justify-center'>
                            <img src={`http://localhost:8000/uploads/partner/${item.partner_logo}`} alt=""  className=''/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    </section>
  )
}

export default HomePartner
