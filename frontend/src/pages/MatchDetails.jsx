import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaYoutube } from 'react-icons/fa6'
import { IoLogoTwitch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import FormateDate from '../components/FormateDate'
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx'

const MatchDetails = () => {

    const [match, setMatch] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const fetchmatch = async()=>{
        try {
            
            const res = await axios.get(`http://localhost:8000/api/match/getById/1`);
            setMatch(res.data.data);

        } catch (error) {
            console.error("Error While Fetch match",error);
        }
    }

    useEffect(()=>{
        fetchmatch();
    }, []);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover text-white' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

           <div className='max-w-[1150px] ml-auto mr-auto py-[20px]'>
                <div>
                    <h2 className='text-[20px] font-[600] flex justify-center mb-[-25px]'>
                        {FormateDate(match.match_date)} , {match.match_time}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    
                    <div className='flex items-center gap-15'>
                        <img src={`http://localhost:8000/uploads/game-team/${match.team1_logo}`} 
                            className='w-[300px] '
                        alt="" />

                    </div>

                    <div className='w-full text-center flex flex-col md:flex-row items-center justify-center gap-5 md:gap-15 lg:gap-40
                        md:border-t  md:border-b border-emerald-400 py-6  bg-emerald-400/20
                    '>

                        <div>
                            <h4 className='text-[20px] font-[600]'>{match.team1_name}</h4>
                            <p className='text-emerald-400 font-[600]'>{match.team1_country}</p>
                        </div>

                        <div>
                            <h2 className='text-[30px] font-[600]'>{match.team1_score} : {match.team2_score}</h2>
                            <span className='text-emerald-400'>Final Score</span>
                        </div>

                        <div>
                            <h4 className='text-[20px] font-[600]'>{match.team2_name}</h4>
                            <p className='text-emerald-400 font-[600]'>{match.team2_country}</p>
                        </div>
                    </div>
            
                    <div className=' '>
                        <img src={`http://localhost:8000/uploads/game-team/${match.team2_logo}`} 
                            className='w-[300px]'
                        alt="" />
                    </div>
                </div>

                <div>
                    <ul className='flex justify-center items-center gap-5 text-[18px] mt-[-25px]'>
                        <Link className='text-emerald-400 text-[16px]'>Watch</Link>
                        <Link><FaYoutube /></Link>
                        <Link><IoLogoTwitch /></Link>
                    </ul>
                </div>
            </div>
        </section>
    </section>

    <section className='py-12 lg:py-20 bg-black text-white '>
        <section className='containers'>

            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-12 lg:col-span-8'>
                    <h2 className='text-[22px] md:text-[30px] font-[800]'>MATCH INFO</h2>

                    <div  className='match-info '
                        dangerouslySetInnerHTML={{__html: match.match_info}}>    
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-4'>
                    <div>
                        <h2 className='text-[25px] md:text-[30px]  font-[500] bg-[#18191d] border-l-3 border-emerald-600
                            px-[10px] sm:px-[30px] py-[8px] mb-[30px]
                        '>
                            LIVE STREAMS
                        </h2>

                        <div className='w-full flex flex-col sm:flex-row items-center 
                            pb-[25px] mb-[25px] border-b border-gray-500'>

                            <div className='w-full sm:w-1/2 sm:border-r text-center border-gray-500 md:pr-6'>
                            
                                <ul className='flex items-center justify-center sm:justify-start gap-10 mb-[15px]'>
                                    <li><img src="/images/gaming-team/fanatic.png" 
                                        className='w-[45px]'alt="" />
                                    </li>
                                    <li className='text-[18px]'>NinJa</li>
                                    <li className='text-[18px] text-emerald-400'>2</li>
                                </ul>

                                <ul className='flex items-center justify-center sm:justify-start gap-10'>
                                    <li><img src="/images/gaming-team/fanatic.png" 
                                        className='w-[45px]'alt="" />
                                    </li>
                                    <li className='text-[18px]'>NinJa</li>
                                    <li className='text-[20px] text-emerald-400'>2</li>
                                </ul>
                            </div>

                            <div className='w-1/2 text-center mt-[20px] sm:mt-[0px]  '>
                                <span className='text-[18px]'>20 October</span>
                            </div>
                        </div>

                    </div>

                    <div className='mt-[50px]'>
                        <h2 className='text-[25px] md:text-[30px] font-[500] bg-[#18191d] border-l-3 border-emerald-600
                            px-[10px] sm:px-[30px] py-[8px] mb-[30px]
                        '>
                            LIVE STREAMS
                        </h2>

                        <div>
                            <div className='relative'
                                onClick={()=>setIsOpen(true)}
                            >
                                <img src="/images/home/artical/video-bg-img.jpg" alt="" />
                                <div className='absolute left-0 top-0 w-[100%] h-[100%] flex justify-center items-center cursor-pointer'>
                                    <FaPlay className='text-[35px] text-emerald-400'/>
                                </div>
                            </div>

                            <div className='my-[30px]'>
                                <h3 className='text-[22px] font-[700]'>HALO CHAMPIONSHIP SERIES</h3>
                                <span className='text-emerald-400'>CS:GO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </section>

    {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 '>
            
            {/* Close button */}
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            >
                <RxCross2 />
            </button>

            {/* Video */}
            <div className="w-[90%] md:w-[900px] aspect-video">
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
    </>
  )
}

export default MatchDetails
