import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from "react-router-dom"
import { FaYoutube } from "react-icons/fa6";
import { IoLogoTwitch } from "react-icons/io";
import FormateDate from '../components/FormateDate';
import HomePartner from '../components/HomePartner';

const MatchPage = () => {

    const [match , setMatch] = useState([]);
    const [matchStatus, setmatchStatus] = useState([])

    const fetchMates = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/api/match/getmatch?match_status=${matchStatus}`)
            setMatch(res.data.data);
        } catch (error) {
            console.error("Error While Fetch Matceths", error);
            console.log(error.response.data.message)
        }
    }

    useEffect(()=>{
        fetchMates();
    },[matchStatus]);

  return (
    <>
     <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    MATCHES
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Matches </span>
                </div>
                
            </div>
        </section>
    </section>

    <section className='py-20 bg-black text-white'>
        <section className="containers">

            {/* match heading */}
            <div className='flex gap-3 items-center'>
                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700 '></div>

                <div className='w-full text-center'>
                    <h2 className='text-shadow text-2xl sm:text-3xl font-semibold text-white'>LATEST MATCHES</h2>
                </div>

                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700'></div>
            </div>

            {/* match list */}
            <div className='flex justify-center gap-6 my-10'>
                <button 
                    className={matchStatus === 'all' ? "border-b-2 border-emerald-400 text-emerald-400 font-[600] cursor-pointer" 
                        : "font-[600] cursor-pointer" }
                    onClick={()=>setmatchStatus("all")}
                >
                    ALL MATCHES
                </button>

                <button 
                    className={matchStatus === 'upcoming' ? "border-b-2 border-emerald-400 text-emerald-400 font-[600] cursor-pointer" 
                        : "font-[600] cursor-pointer" }
                    onClick={()=>setmatchStatus("upcoming")}
                >
                    UPCOMING
                </button>

                <button 
                    className={matchStatus === 'completed' ? "border-b-2 border-emerald-400 text-emerald-400 font-[600] cursor-pointer" 
                        : "font-[600] cursor-pointer" }
                    onClick={()=>setmatchStatus("completed")}
                >
                    COMPLETED
                </button>
            </div>

            {match.map((item)=>(
            <div className='max-w-[1150px] ml-auto mr-auto py-[20px]' key={item.id}>
                <div>
                    <h2 className='text-[20px] font-[600] flex justify-center mb-[-25px]'>
                        {FormateDate(item.match_date)} , {item.match_time}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    
                    <div className='flex items-center gap-15'>
                        <img src={`http://localhost:8000/uploads/game-team/${item.team1_logo}`} 
                            className='w-[300px] '
                        alt="" />

                    </div>

                    <div className='w-full text-center flex flex-col md:flex-row items-center justify-center gap-5 md:gap-15 lg:gap-40
                        md:border-t  md:border-b border-emerald-400 py-6  
                    '>

                        <div>
                            <h4 className='text-[20px] font-[600]'>{item.team1_name}</h4>
                            <p className='text-emerald-400'>{item.team1_country}</p>
                        </div>

                        <div>
                            <h2 className='text-[30px] font-[600]'>{item.team1_score} : {item.team2_score}</h2>
                            <span className='text-emerald-400'>Final Score</span>
                        </div>

                        <div>
                            <h4 className='text-[20px] font-[600]'>{item.team2_name}</h4>
                            <p className='text-emerald-400'>{item.team2_country}</p>
                        </div>
                    </div>
            
                    <div className=' '>
                        <img src={`http://localhost:8000/uploads/game-team/${item.team2_logo}`} 
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
            ))}
        

        </section>
    </section>

    <HomePartner />
    </>
  )
}

export default MatchPage
