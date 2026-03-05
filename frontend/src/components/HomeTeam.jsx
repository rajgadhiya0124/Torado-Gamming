import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const HomeTeam = () => {
  return (
    // home team section
    <section className='relative py-25 bg-center bg-no-repeat bg-cover bg-fixed text-white'
        style={{backgroundImage: "url('/images/home/team/team-bg.jpg')"}}
    >

        <div className='absolute  inset-0 bg-black/70'></div>

        <section className="containers relative z-10">

            {/* team header */}
            <div className='flex items-center'>
                <h2 className='text-shadow w-full text-3xl font-semibold text-white'>MEET OUR TEAM</h2>

                <div className="h-[1.5px] w-full bg-[#198754]"></div>

                <div className='w-full flex justify-end'>
                    <Link className='flex items-center text-emerald-400 text-[18px] font-[700]'>ALL TEAM MEMBERS <MdKeyboardArrowRight /></Link>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5 mt-[50px]'>
                {/* team card */}
                <div className='home-team-card relative group cursor-pointer'>
                    <img src="/images/home/team/team-1.jpg" style={{width:"100%"}} alt="" />
                    
                    <div className='absolute bottom-0 left-0 w-full text-center py-5 bg-black/50 
                        translate-y-0 opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-500 ease-in-out
                        '
                        >
                       
                        <h4 className='font-[600] text-[20px]'>STOMEN DEW</h4>
                        <span className='text-emerald-400'>Manager</span>
                        
                    </div>
                </div>

                 <div className='home-team-card relative group cursor-pointer'>
                    <img src="/images/home/team/team-2.jpg" style={{width:"100%"}} alt="" />
                    
                    <div className='absolute bottom-0 left-0 w-full text-center py-5
                        bg-black/50 
                        translate-y-0 opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-500 ease-in-out'>
                       
                        <h4 className='font-[600] text-[20px]'>LISA KOJIMA</h4>
                        <span className='text-emerald-400'>Founder</span>
                        
                    </div>
                </div>

                 <div className='home-team-card relative group cursor-pointer'>
                    <img src="/images/home/team/team-3.jpg" style={{width:"100%"}} alt="" />
                    
                    <div className='absolute bottom-0 left-0 w-full text-center py-5
                        bg-black/50 
                        translate-y-0 opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-500 ease-in-out'>
                       
                        <h4 className='font-[600] text-[20px]'>STAVEN SMITH</h4>
                        <span className='text-emerald-400'>Marketer</span>
                        
                    </div>
                </div>



            </div>
        </section>
    </section>
  )
}

export default HomeTeam
