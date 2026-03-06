import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeCommunity from '../components/HomeCommunity';
import HomePartner from '../components/HomePartner';

const TeamPage = () => {

    const navigate = useNavigate();
    const [teamMember, setTeamMember] = useState([]);

    const fetchTeamMember = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/coreteam/getall");

            const ActiveTeam = res.data.data.filter(
                (items)=> items.status === 1
            )
            setTeamMember(ActiveTeam);
        } catch (error) {
            console.error("error while fetch team members",error)
        }
    }

    useEffect(()=>{
        fetchTeamMember();
    },[]);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    OUR TEAM
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Our Team </span>
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
                    <h2 className='text-shadow text-2xl sm:text-3xl font-semibold text-white'>MEET OUR TEAM</h2>
                </div>

                <div className='hidden lg:block w-full h-[1.5px] bg-emerald-700'></div>
            </div>

            {/* team list */}
            <div className='mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>

                {teamMember.map((item)=>(
                <div className='relative group overflow-hidden cursor-pointer' key={item.id}
                    onClick={()=>navigate(`/teamdetails/${item.id}`)}
                >
                    <img src={`http://localhost:8000/uploads/team/${item.member_image}`} 
                        className='w-full '
                        alt="" />

                    <div className='absolute bottom-0 left-0 w-full text-center py-5 bg-gradient-to-t from-black/90 to-transparent
                        opacity-100 
                        lg:translate-y-0 lg:opacity-0
                        lg:group-hover: translate-y-0  group-hover:opacity-100 
                        transition-all duration-500 ease-in-out
                    '>
                        <h2 className='text-[20px] font-[600]'>
                            {item.member_name}
                        </h2>
                        <span className='text-emerald-400'>{item.member_role}</span>
                    </div>
                </div>
                ))}                
            </div>
        </section>
    </section>

    <HomeCommunity />
    <HomePartner />
    </>
  )
}

export default TeamPage
