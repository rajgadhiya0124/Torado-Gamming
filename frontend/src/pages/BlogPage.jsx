import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuClock3 } from "react-icons/lu";
import { LiaComment } from "react-icons/lia";
import { useState } from 'react';
import axios from 'axios';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useEffect } from 'react';
import FormateDate from '../components/FormateDate';
import HomePartner from '../components/HomePartner';

const BlogPage = () => {
    const navigat = useNavigate();

    const [blog , setBlog] = useState([]);
    const [blogCategory , setBlogCategory] = useState([]);
    const [blogTag , setBlogTag] = useState([]);
    const [search, setSearch] = useState("");
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 

    const filterBlog = blog.filter((items)=>
        items.blog_title.toLowerCase().includes(search.toLowerCase())
    )

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentBlog = filterBlog.slice(firstIndex,lastIndex);

    const totalPages = Math.ceil(filterBlog.length / itemsPerPage);
    

    //fetch blogs
    const fetchBlogs = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/blog/getall",
                {withCredentials: true}
            );
            const ActiveBlog = res.data.data.filter(
                (item) => item.status === 1
            )
            setBlog(ActiveBlog);
        } catch (error) {
            console.error("Error While Fetch Blog", error);
            console.log(error.response?.data.message)
        }
    }

    //fetch category
    const fetchBlogCategory = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/blog/category/getall",
                {withCredentials: true}
            );

            const ActiveCategory  = res.data.data.filter(
                (items)=> items.status === 1
            )
            setBlogCategory(ActiveCategory);
        } catch (error) {
            console.error("Error While Fetch Blog", error);
            console.log(error.response?.data.message)
        }
    }

    //fetch blog tag
    const fetchBlogTag = async()=>{
        try {
            const res = await axios.get("http://localhost:8000/api/blog/tag/getall",
                {withCredentials: true}
            );

            const ActiveTag  = res.data.data.filter(
                (items)=> items.status === 1
            )
            setBlogTag(ActiveTag);
            
        } catch (error) {
            console.error("Error While Fetch Blog", error);
            console.log(error.response?.data.message)
        }
    }

    useEffect(()=>{
        fetchBlogs();
        fetchBlogCategory();
        fetchBlogTag();
    },[]);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                   BLOG
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Blog </span>
                </div>
            </div>

        </section>
    </section>

    <section className='py-25 bg-black text-white'>
        <section className="containers">

            <div className="grid grid-cols-12 gap-6">
                <div className='col-span-12 lg:col-span-8'>
                    {currentBlog.map((item)=>(
                    <div className=''>
                        <img src={`http://localhost:8000/uploads/blog/${item.blog_image}`} 
                        style={{
                            maxWidth:"100%"
                        }} alt="" />

                        <div className='py-[25px]'>
                            <ul className='flex items-center gap-10 mb-[10px]'>
                                <li className='flex items-center gap-2'>
                                    <LuClock3 className='text-emerald-400'/>
                                    {FormateDate(item.blog_date)}
                                </li>
                                <li className='flex items-center gap-2'>
                                    <LiaComment className='text-emerald-400'/>
                                    {item.total_comments} Comments
                                </li>
                            </ul>

                            <h2 onClick={()=>navigat(`blog/details/${item.id}`)}
                            className='text-[18px] sm:text-[24px] font-[700] cursor-pointer hover:text-emerald-400'>
                                {item.blog_title}
                            </h2>

                            <p 
                            dangerouslySetInnerHTML={{__html:item.blog_content.substring(0,200)}}
                            className='text-16px sm:text-[18px] text-[#dbdbdb] font-[500]'>
                                {/* {item.blog_content} */}
                            </p>

                            <button onClick={()=>navigat(`/blog/details/${item.id}`)}
                            className="w-fit mt-4 py-2 text-[14px] sm:text-[16px] md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-4xl bg-emerald-400 text-black font-[700] cursor-pointer hover:bg-white">
                                READ MORE
                            </button>
                        </div>
                    </div>
                    ))}


                    <div className="pagination flex gap-2 mt-4">
                        <button
                        className='border border-emerald-400 px-2 sm:px-3 py-1 sm:py-2 cursor-pointer'
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        >
                            <MdKeyboardArrowLeft />
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={currentPage === index + 1 ? 
                                "bg-emerald-400 text-black px-3 py-1 sm:py-2  font-[600]  cursor-pointer" : 
                                "border border-emerald-400 px-3 py-1 sm:py-2 cursor-pointer"}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                        ))}

                        <button
                        className='border border-emerald-400 px-2 sm:px-3 py-1 sm:py-2 cursor-pointer'
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        >
                            <MdKeyboardArrowRight />
                        </button>
                    </div>

                </div>

                <div className="col-span-12 lg:col-span-4">

                    {/* search bar */}
                    <div className='relative'>
                        <input type="text" name="" id="" 
                        placeholder='Search...'
                        value={search}
                        onChange={(e)=>{
                            setSearch(e.target.value)
                        }}
                        className='w-full border border-gray-500 rounded-4xl py-[15px] px-[20px] outline-none focus:ring ring-emerald-400'/>

                        <IoSearch className='absolute right-5 top-4 text-[20px]'/>
                    </div>


                    <div className='mt-[25px]'>
                        <h3 className='bg-[#1e2024] py-[8px] px-[15px] sm:px-[30px] text-[20px] lg:text-[30px] font-[500] border-l-2 border-emerald-400'>
                            CATEGORIES
                        </h3>

                        <div>
                            <ul className='flex flex-col gap-3 p-[20px] list-disc list-disc'>
                                {blogCategory.map((item)=>(
                                
                                    <li onClick={()=>navigat(`/blog/category/${item.id}`)}
                                    className='flex justify-between text-[16px] sm:text-[18px] text-[#abb2bf] cursor-pointer hover:text-emerald-400'>
                                        <span>{item.category_name}</span>
                                        <span>(5)</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='mt-[25px]'>
                        <h3 className='bg-[#1e2024] py-[8px] px-[15px] sm:px-[30px] text-[20px] lg:text-[30px] font-[500] border-l-2 border-emerald-400'>
                           LATEST RESULTS
                        </h3>

                        <div className='p-[30px] bg-[#101010]'>
                            <div className='border-b border-gray-400 pb-[15px] mb-[20px]'>
                         
                               <div className='flex w-full'>
                                    <ul className='w-1/2'>
                                        <li className='flex items-center gap-3 mb-5'>
                                            <img src="/images/blog/team-1.jpg" className='rounded-full' alt="" />
                                            <div className='flex items-center gap-5'>
                                                <p className='text-[18px] sm:text-[20px]'>Astro</p>
                                                <span className="text-[18px] text-emerald-400">5</span>
                                            </div>
                                        </li>

                                        <li className='flex items-center gap-3 mb-5'>
                                            <img src="/images/blog/team-2.jpg" className='rounded-full' alt="" />
                                            <div className='flex items-center gap-5'>
                                                <p className='text-[18px] sm:text-[20px]'>Shark</p>
                                                <span className="text-[18px] text-emerald-400">5</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className='w-1/2 p-[30px] text-center'>
                                        <span className='text-[18px] sm:text-[20px]'>18 October</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='mt-[25px]'>
                        <h3 className='bg-[#1e2024] py-[8px] px-[15px] sm:px-[30px] text-[20px] lg:text-[30px] font-[500] border-l-2 border-emerald-400'>
                           POPULAR TAGS
                        </h3>

                        <div className='p-[25px] bg-[#101010]'>
                            <ul className='flex flex-wrap gap-3'>
                                {blogTag.map((item)=>(
                                    <li onClick={()=>navigat(`/blog/tag/${item.id}`)}
                                    className='text-[16px] sm:text-[18px] text-[#abb2bf] cursor-pointer hover:text-emerald-400'>
                                        {item.tag_name} /
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </section>

    <HomePartner />
    </>
  )
}

export default BlogPage
