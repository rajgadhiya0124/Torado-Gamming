import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniArrowsPointingIn } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HomePartner from '../components/HomePartner';

const GalleryPage = () => {

    const [gallery, setGallery] = useState([]);
    const [visibleCount, setVisibleCount] = useState(2);

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const fetchGallery = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/gallery/getall");

            const ActiveGallery = res.data.data.filter(
                (item) => item.status === 1
            );
            setGallery(ActiveGallery);
        } catch (error) {
            console.error("Error While Fetch Gallery",error);
        }
    }

    useEffect(()=>{
        fetchGallery();
    },[]);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    GALLERY
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Gallery </span>
                </div>
            </div>
        </section>
    </section>

    <section className='py-20 bg-black text-white'>
        <section className="containers">
            {/* gallery heading */}
            <div className='flex gap-3 items-center'>
                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700 '></div>

                <div className='w-full text-center'>
                    <h2 className='text-shadow text-2xl sm:text-3xl font-semibold text-white'>OUR GALLERY</h2>
                </div>

                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700'></div>
            </div>

            {/* gallery list */}
            <div className='mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>

                {gallery.slice(0,visibleCount).map((item, index)=>(
                <div className='relative group overflow-hidden cursor-pointer' 
                    key={item.id}
                    onClick={()=>{
                        setOpen(true);
                        setActiveIndex(index)
                    }}
                >
                    <img src={`http://localhost:8000/uploads/gallery/${item.gallery_image}`} 
                    style={{width:"100%"}} alt="" />

                    <span className='absolute bg-black/50 w-full h-full top-0 left-0
                        flex justify-center items-center text-[25px] 
                        -translate-y-full group-hover:translate-y-0 transition-all duration-500
                    '>
                        <HiMiniArrowsPointingIn />
                    </span>
                </div>
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <button className='text-emerald-400 text-[20px] font-[600] cursor-pointer'
                    onClick={()=>setVisibleCount( prev => prev + 2)}
                >
                    VIEW MORE
                </button>
            </div>

        </section>
    </section>

    {open &&(
        <div className='fixed inset-0 bg-black/70 z-[999] flex justify-center items-center'>

            <div className='relative w-[90%] max-w-[550px]'>

                <button onClick={()=>setOpen(false)}
                    className='absolute top-[-25px] right-[0px] text-white text-[20px] cursor-pointer'>
                    <IoMdClose />
                </button>

                <Swiper 
                    modules={[Navigation]}
                    initialSlide={activeIndex}
                    loop={true}

                    navigation={{
                        prevEl:".custom-prev",
                        nextEl:".custom-next"
                    }}
                >
                    {gallery.map((item)=>(
                        <SwiperSlide>
                            <img src={`http://localhost:8000/uploads/gallery/${item.gallery_image}`}
                            className='w-full max-h-[80vh] object-contain'
                            alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

             {/* navigattion button */}
                <div className="flex items-center">
                    <div className="custom-prev absolute left-8 lg:left-10 lg:top-1/2
                        -translate-y-1/2 z-10 
                        w-12 h-12 flex items-center justify-center cursor-pointer text-2xl text-emerald-400 bg-emerald-300/30 hover:bg-white/50 p-3  rounded-full">
                        <MdOutlineKeyboardArrowLeft />
                    </div>
    
                    <div className="custom-next absolute right-8 lg:right-10 lg:top-1/2
                    -translate-y-1/2 z-10 
                    w-12 h-12 flex items-center justify-center cursor-pointer text-2xl text-emerald-400 bg-emerald-300/30 hover:bg-white/50 p-3 rounded-full">
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
        </div>
    )}

    <HomePartner />
    </>
  )
}

export default GalleryPage
