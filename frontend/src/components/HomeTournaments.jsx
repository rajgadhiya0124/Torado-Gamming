import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiAward } from "react-icons/fi";

const HomeTournaments = () => {
  return (
    // home upcoming tournaments section
    <section className='py-25 bg-[#212529] text-white'>
        <section className="containers">
            
            {/* tournaments header */}
            <div className='flex items-center justify-between'>
                <h2 className='text-shadow w-full text-3xl font-semibold text-white'>UPCOMING TOURNAMENTS</h2>

                <div className="h-[1.5px] w-full bg-[#198754]"></div>

                <div className='w-full flex justify-end'>
                    <Link className='flex items-center text-emerald-400 text-[18px] font-[700]'>BROWSE ALL <MdKeyboardArrowRight /></Link>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                <div className='tournaments-card mt-8 cursor-pointer group duration-500 hover:translate-y-[-10px]'>
                    <div className='relative'>
                        <img src="/images/home/tournaments/tournament-1.jpg"  style={{width:"100%"}} alt="" />
                        <span className='absolute top-4 flex items-center gap-2 text-[22px] bg-[#0be9c280] px-[10px] py-[5px]'>
                            <FiAward />
                            <p className='font-[500]'>$ 350</p>
                        </span>
                    </div>
                    
                    <ul className='flex justify-between py-[10px] px-[20px] bg-[#262931] group-hover:bg-[#198754]'>
                        <li>Nov 05, 03:30 PM</li>
                        <li><Link>JOIN NOW!</Link> </li>
                    </ul>

                    <div className='py-[30px] px-[20px] bg-[#1e2024] group-hover:bg-[#375446]'>
                        <h3 className='text-[25px] font-[700]'>RED LION</h3>

                        <div className='flex justify-between mb-4'>
                            <span>Team Size: <span className='text-emerald-400 font-[600]'>1 V 1 </span> </span>
                            <span>Players: <span className='text-emerald-400 font-[600]'> 1/15 </span></span>
                        </div>

                        <div className='flex gap-5'>
                            <img src="/images/home/tournaments/mountain-deer.png" 
                                className='border border-emerald-400 rounded-full p-[10px] bg-[#57585b]'
                            alt="" />

                            <div cl>
                                <span className='text-emerald-400'>Hosted BY</span>
                                <h4 className='font-[700] text-[20px]'>MOUNTAIN DEER</h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='tournaments-card mt-8 cursor-pointer group duration-500 hover:translate-y-[-10px]'>
                    <div className='relative'>
                        <img src="/images/home/tournaments/tournament-2.jpg"  style={{width:"100%"}} alt="" />
                        <span className='absolute top-4 flex items-center gap-2 text-[22px] bg-[#0be9c280] px-[10px] py-[5px]'>
                            <FiAward />
                            <p className='font-[500]'>$ 350</p>
                        </span>
                    </div>
                    
                    <ul className='flex justify-between py-[10px] px-[20px] bg-[#262931] group-hover:bg-[#198754]'>
                        <li>Nov 05, 03:30 PM</li>
                        <li><Link>JOIN NOW!</Link> </li>
                    </ul>

                    <div className='py-[30px] px-[20px] bg-[#1e2024] group-hover:bg-[#375446]'>
                        <h3 className='text-[25px] font-[700]'>RED LION</h3>

                        <div className='flex justify-between mb-4'>
                            <span>Team Size: <span className='text-emerald-400 font-[600]'>1 V 1 </span> </span>
                            <span>Players: <span className='text-emerald-400 font-[600]'> 1/15 </span></span>
                        </div>

                        <div className='flex gap-5'>
                            <img src="/images/home/tournaments/mountain-deer.png" 
                                className='border border-emerald-400 rounded-full p-[10px] bg-[#57585b]'
                            alt="" />

                            <div cl>
                                <span className='text-emerald-400'>Hosted BY</span>
                                <h4 className='font-[700] text-[20px]'>MOUNTAIN DEER</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='tournaments-card mt-8 cursor-pointer group duration-500 hover:translate-y-[-10px]'>
                    <div className='relative'>
                        <img src="/images/home/tournaments/tournament-3.jpg"  style={{width:"100%"}} alt="" />
                        <span className='absolute top-4 flex items-center gap-2 text-[22px] bg-[#0be9c280] px-[10px] py-[5px]'>
                            <FiAward />
                            <p className='font-[500]'>$ 350</p>
                        </span>
                    </div>
                    
                    <ul className='flex justify-between py-[10px] px-[20px] bg-[#262931] group-hover:bg-[#198754]'>
                        <li>Nov 05, 03:30 PM</li>
                        <li><Link>JOIN NOW!</Link> </li>
                    </ul>

                    <div className='py-[30px] px-[20px] bg-[#1e2024] group-hover:bg-[#375446]'>
                        <h3 className='text-[25px] font-[700]'>RED LION</h3>

                        <div className='flex justify-between mb-4'>
                            <span>Team Size: <span className='text-emerald-400 font-[600]'>1 V 1 </span> </span>
                            <span>Players: <span className='text-emerald-400 font-[600]'> 1/15 </span></span>
                        </div>

                        <div className='flex gap-5'>
                            <img src="/images/home/tournaments/mountain-deer.png" 
                                className='border border-emerald-400 rounded-full p-[10px] bg-[#57585b]'
                            alt="" />

                            <div cl>
                                <span className='text-emerald-400'>Hosted BY</span>
                                <h4 className='font-[700] text-[20px]'>MOUNTAIN DEER</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </section>
  )
}

export default HomeTournaments
