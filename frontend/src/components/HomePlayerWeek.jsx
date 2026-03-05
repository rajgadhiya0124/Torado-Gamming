import React from 'react'
import { GoTrophy } from "react-icons/go";

const HomePlayerWeek = () => {
  return (
    // player of the week section
    <section className='py-25 bg-[#1E2024] text-white'>
        <section className="containers">
            {/* player heading */}
            <div className='flex items-center'>
                <div className="h-[1.5px] w-full bg-[#198754]"></div>

                <h2 className='text-shadow w-full text-3xl font-semibold text-center text-white'>PLAYERS OF THE WEEK</h2>

                <div className="h-[1.5px] w-full bg-[#198754]"></div>
            </div>


            <div className='flex gap-5 mt-[50px]'>
                <div className='w-1/2 flex bg-[#212529] p-[25px]' >
                    <div className='flex items-center gap-5'>
                        <img src="/images/home/palyerweek/players-1.jpg" alt="" />
                        <div className=''>
                            <h2 className='text-[24px] font-[700]'>DON LUDWING</h2>

                            <ul>
                                <li> 
                                    <span className='text-emerald-400 font-[600]'>GAME ID:</span> 
                                     #@!TORADO070 
                                </li>
                                <li>
                                    <span className='text-emerald-400 font-[600]'>JOINED:</span>
                                     7 May, 2025</li>
                                <li>
                                   <span className='text-emerald-400 font-[600]'>RANK:</span> 
                                    01
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-3 items-center  justify-center border-l border-emerald-400 pl-[50px]'>
                            <h3 className='text-[24px] font-[700]'>WIN TROPHIES</h3>
                            <GoTrophy style={{fontSize:"60px",color:"#00d492"}}/>
                            <span>Gold</span>
                        </div>
                    </div>
                </div>  

                <div className='w-1/2 flex bg-[#212529] p-[25px]' >
                    <div className='flex items-center gap-5'>
                        <img src="/images/home/palyerweek/players-2.jpg" alt="" />
                        <div className=''>
                            <h2 className='text-[24px] font-[700]'>MARVA GRUBER</h2>

                            <ul>
                                <li> 
                                    <span className='text-emerald-400 font-[600]'>GAME ID:</span> 
                                    !#@TORADO21
                                </li>
                                <li>
                                    <span className='text-emerald-400 font-[600]'>JOINED:</span>
                                    21 Nov, 2018</li>
                                <li>
                                   <span className='text-emerald-400 font-[600]'>RANK:</span> 
                                    07
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-3 items-center  justify-center border-l border-emerald-400 pl-[50px]'>
                            <h3 className='text-[24px] font-[700]'>WIN TROPHIES</h3>
                            <GoTrophy style={{fontSize:"60px",color:"#00d492"}}/>
                            <span>Gold</span>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    </section>
  )
}

export default HomePlayerWeek
