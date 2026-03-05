import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { LuClock3 } from "react-icons/lu";
import { GoComment } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import axios from 'axios';
import FormateDate from './FormateDate';

const HomeArtical = () => {

    const [blog,setBlog] = useState([]);

    //feth blog
    const fetchBlog = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/blog/getall");
            setBlog(res.data.data)
        } catch (error) {
            console.error("Error While Fetch Blog", error);
        }
    }

    useEffect(()=>{
        fetchBlog();
    },[]);

  return (
    // home article section

    <section className='py-30 bg-cover bg-center bg-no-repeat bg-fixed text-white' 
            style={{backgroundImage: "url('/images/home/artical/articles-bg.jpg')"}}>
        <section className="containers">
            <div className="grid grid-cols-12 gap-8">

                <div className="col-span-8">
                    <div className='flex items-center gap-5 mb-[25px]'>
                        <h2 className= 'text-shadow text-3xl font-semibold text-white '> 
                            LATEST ARTICLES</h2>
                        <div className='w-12 h-[1.5px] bg-emerald-400'></div>
                    </div>

                    <div className='grid gap-[20px] grid-cols-1 md:grid-cols-2'>

                        {blog.slice(0,4).map((item)=>(
                        <div className='home-article-card relative overflow-hidden'>
                            <img src={`http://localhost:8000/uploads/blog/${item.blog_image}`}
                                className='w-full h-[450px] object-cover' 
                                alt="" />

                            <div className="absolute inset-0 bg-black/40 transition duration-500 hover:opacity-0 hover:cursor-pointer"></div>

                            <div className='absolute bottom-0 left-0 p-[30px] text-white'>
                                <h3 className='text-[24px] font-extrabold transition duration-500 hover:text-emerald-400' >
                                    <Link to={`blog/details/${item.id}`}>{item.blog_title}</Link>
                                </h3>

                                <p 
                                    dangerouslySetInnerHTML={{__html:item.blog_content.substring(0,100)}}
                                    className='text-16px sm:text-[18px] text-[#dbdbdb] font-[500]'>
                                </p>

                                <ul className='flex items-center gap-5'>
                                    <li className='flex items-center gap-3'>
                                        <span><LuClock3 style={{color:"#0be9c2"}}/></span>
                                        <span>{FormateDate(item.blog_date)}</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <span><GoComment style={{color:"#0be9c2"}}/></span>
                                        <span>{item.total_comments} Comments</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        ))}

                        {/* <div className='home-article-card relative overflow-hidden'>
                            <img src="/images/home/artical/article-2.jpg"
                                className='w-[100%] object-cover' 
                                alt="" />

                            <div className="absolute inset-0 bg-black/40 transition duration-500 hover:opacity-0 hover:cursor-pointer"></div>

                            <div className='absolute bottom-0 left-0 p-[30px] text-white'>
                                <h3 className='text-[25px] font-extrabold ' >
                                    <Link>EW ZONE FOR MULTIPLAYER GAMES</Link>
                                </h3>

                                <p>Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec.</p>

                                <ul className='flex items-center gap-5'>
                                    <li className='flex items-center gap-3'>
                                        <span><LuClock3 style={{color:"#0be9c2"}}/></span>
                                        <span>04 Oct, 2025</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <span><GoComment style={{color:"#0be9c2"}}/></span>
                                        <span>30 Comments</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-article-card relative overflow-hidden'>
                            <img src="/images/home/artical/article-2.jpg"
                                className='w-[100%] object-cover' 
                                alt="" />

                            <div className="absolute inset-0 bg-black/40 transition duration-500 hover:opacity-0 hover:cursor-pointer"></div>

                            <div className='absolute bottom-0 left-0 p-[30px] text-white'>
                                <h3 className='text-[25px] font-extrabold ' >
                                    <Link>EW ZONE FOR MULTIPLAYER GAMES</Link>
                                </h3>

                                <p>Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec.</p>

                                <ul className='flex items-center gap-5'>
                                    <li className='flex items-center gap-3'>
                                        <span><LuClock3 style={{color:"#0be9c2"}}/></span>
                                        <span>04 Oct, 2025</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <span><GoComment style={{color:"#0be9c2"}}/></span>
                                        <span>30 Comments</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='home-article-card relative overflow-hidden'>
                            <img src="/images/home/artical/article-2.jpg"
                                className='w-[100%] object-cover' 
                                alt="" />

                            <div className="absolute inset-0 bg-black/40 transition duration-500 hover:opacity-0 hover:cursor-pointer"></div>

                            <div className='absolute bottom-0 left-0 p-[30px] text-white'>
                                <h3 className='text-[25px] font-extrabold ' >
                                    <Link>EW ZONE FOR MULTIPLAYER GAMES</Link>
                                </h3>

                                <p>Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec.</p>

                                <ul className='flex items-center gap-5'>
                                    <li className='flex items-center gap-3'>
                                        <span><LuClock3 style={{color:"#0be9c2"}}/></span>
                                        <span>04 Oct, 2025</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <span><GoComment style={{color:"#0be9c2"}}/></span>
                                        <span>30 Comments</span>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="col-span-4">
                    <div className='flex items-center gap-5  mb-[25px]' >
                        <h2 className='text-shadow text-3xl font-semibold text-white'>LIVE STREAMS</h2>
                        <div className='w-12 h-[1.5px] bg-emerald-400'></div>
                    </div>

                    <div className='live-sterm text-white'>
                        <div className='video-content relative'>
                            <img src="/images/home/artical/video-bg-img.jpg" style={{width:"100%"}} alt="" />
                            <div className='absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center cursor-pointer'>
                                <FaPlay style={{fontSize:"50px",color:"#0be9c2"}}/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h3 className='text-[22px] font-[700]'>HALO CHAMPIONSHIP SERIES</h3>
                            <span className='text-emerald-400'>CS:GO</span>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <img src="/images/tournaments/cat-hunter.png" 
                                style={{width:"80px"}} alt="" />

                                <div>
                                    <h4 className='text-[20px] font-[800]'>HUSKY</h4>
                                    <span>2007 Viewers</span>
                                </div>
                            </div>

                            <div>
                                <button className='bg-emerald-400 rounded-4xl text-black font-[600] px-[20px] py-[5px]'>LIVE</button>
                            </div>
                        </div>
                    </div>

                    <div className='tournaments-lists mt-[25px]'>
                        <div className='flex justify-between mb-[30px]'>
                            <div className='relative'>
                                <img src="/images/home/artical/live-img-1.jpg" style={{maxWidth:"135px"}} alt="" />
                                <span className='absolute bottom-5 right-3 bg-emerald-400 rounded-4xl text-black px-[15px] py-[5px] text-[12px] font-[600]'>
                                    LIVE
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src="/images/home/artical/hoast-img.png" alt="" />

                                <div>
                                    <h4 className='text-[20px] font-[800]'>CROCODILES FITNESS</h4>
                                    <span>485 Viewers</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </section>
  )
}

export default HomeArtical
