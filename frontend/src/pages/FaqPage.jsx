import React from 'react'
import { useState } from 'react';
import  axios from "axios"
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp  } from "react-icons/md";
import HomePartner from '../components/HomePartner';

const FaqPage = () => {

    const [faq,setFaq] = useState([]);
    const [active, setActive] = useState(null);

    const toogleFAQ = (index)=>{
        setActive(active === index ? null : index);
    };   


    const fetchFaq = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/faq/getall");
            const ActiveFaq = res.data.data.filter(
                (items)=> items.status === 1
            );

            setFaq(ActiveFaq);
        } catch (error) {
            console.error("Error While fetch faq",error);
        }
    }

    useEffect(()=>{
        fetchFaq();
    }, []);


  return (
   <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    FAQS
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> FAQs </span>
                </div>
            </div>
        </section>
    </section>

    <section className='py-20 bg-[#151519] text-white'>
        <section className="containers">

            {/* faq heading */}
            <div className='flex gap-3 items-center'>
                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700 '></div>

                <div className='w-full text-center'>
                    <h2 className='text-shadow text-2xl sm:text-3xl font-semibold text-white'>FREQUENTLY ASKED QUESTIONS</h2>
                </div>

                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700'></div>
            </div>

            {/* faq list */}
            <div className='my-8'>
                {faq.map((faq, index)=>(
                    <div>
                        <button
                            onClick={()=>toogleFAQ(index)}
                            className={`w-full flex text-left items-center justify-between py-2 text-[16px] md:text-[18px] font-[600] cursor-pointer
                                ${active === index ? "text-emerald-400" : "text-white"} `}
                        >
                            {faq.question}

                            <span className='text-[20px]'>
                                {active === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </span>

                        </button>
    
                        <div
                            className={`overflow-hidden transition-all duration-500 ${
                                active === index ? "max-h-100 mt-2 mb-2" : "max-h-0"}`}
                        >
                            <p className='text-gray-300 text-[16px] lg:text-[16px]'>{faq.answer}</p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    </section>

    <HomePartner />
   </>
  )
}

export default FaqPage
