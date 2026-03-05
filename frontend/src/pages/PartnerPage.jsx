import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PartnerPage = () => {

    const [partner, setPartner] = useState([]);

    const [showAll, setShowAll] = useState(false);

    const visibalPartners = showAll ? partner : partner.slice(0,6);

    const fetchPartner = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/partner/getall");

            const ActivePartner = res.data.data.filter(
                (item)=> item.status === 1
            );
            setPartner(ActivePartner);
            console.log(ActivePartner)
        } catch (error) {
            console.error("Error While Fetch Partner",error);
        }
    }

    useEffect(()=>{
        fetchPartner();
    },[]);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    PARTNERS
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> PARTNERS </span>
                </div>
            </div>
        </section>
    </section>

    <section className='py-20 bg-black text-white'>
        <section className="containers">

            {/* faq heading */}
            <div className='flex gap-3 items-center'>
                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700 '></div>

                <div className='w-full text-center'>
                    <h2 className='text-shadow text-2xl sm:text-3xl font-semibold text-white'>OUR PARTNERS</h2>
                </div>

                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700'></div>
            </div>

            {/* partner list */}
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

                {visibalPartners.map((item,index)=>(
                <div key={index} className='bg-[#212529] flex flex-col items-center p-25 sm:p-30'>
                    <img src={`http://localhost:8000/uploads/partner/${item.partner_logo}`} 
                        className='max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] w-full object-contain'
                        alt="" 
                    />
                    <p className='mt-2 text-gray-400 text-[16px] sm:text-[20px] font-[600]'>
                        {item.partner_link}
                    </p>
                </div>
                ))}

                
            </div>

            <div className='flex justify-center my-[15px]'>
                <button className='px-6 py-2 text-emerald-500 text-[20px] font-[600] cursor-pointer'
                    onClick={()=>setShowAll(true)}>
                    View More
                </button>
            </div>

        </section>
    </section>
    </>
  )
}

export default PartnerPage
