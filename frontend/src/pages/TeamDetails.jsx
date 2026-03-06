import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const TeamDetails = () => {

    const { id } = useParams();
    const [teamMember, setTeamMemeber] = useState([]);

    const fetchTeamMemeber = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/api/coreteam/get/memberdetails/${id}`);
            setTeamMemeber(res.data.data)
        } catch (error) {
            console.error("Error While Fetch members details",error);
        }
    }

    useEffect(()=>{
        fetchTeamMemeber();
    },[id]);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    Team Details
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Team Details </span>
                </div>
            </div>
        </section>
    </section>

    <section className='py-20 bg-black text-white'>
        <section className="containers">
            
            {/* team heading */}
            <div className='flex gap-3 items-center'>
                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700 '></div>

                <div className='w-full text-center'>
                    <h2 className='text-shadow text-2xl sm:text-3xl font-semibold text-white'>ABOUT TEAM MEMBER</h2>
                </div>

                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700'></div>
            </div>


            <div className='mt-15 flex flex-col sm:flex-row items-center gap-10'>
                <img 
                    src={`http://localhost:8000/uploads/team/${teamMember.member_image}`}
                    className="w-[220px] rounded-full"
                    alt=""
                />

                <div>
                    <h2 className="text-emerald-400 text-[20px] sm:text-[22px]  font-bold">
                        {teamMember.member_name}
                    </h2>
                    <p className="text-gray-300 mb-4 text-[16px] sm:text-[18px] font-[600]">
                        {teamMember.member_role}
                    </p>

                    <p className="whitespace-pre-line leading-relaxed text-gray-300">
                        {teamMember.member_bio}
                    </p>

                    <div className="flex gap-4 mt-6 text-[20px]" >
                        <a href={teamMember.member_twitter} target='_blank'><FaTwitter /></a>
                        <a href={teamMember.member_instagram} target="_blank"><FaInstagram /></a>
                        <a href={teamMember.member_linkedin} target='_blank'><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

        </section>
    </section>
    </>
  )
}

export default TeamDetails
