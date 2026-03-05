import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LiaComment } from 'react-icons/lia';
import { LuClock3 } from 'react-icons/lu';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom'
import FormateDate from '../components/FormateDate';

const BlogTag = () => {
    const { id } = useParams();
    const [blog,setBlog] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentBlog = blog.slice(firstIndex,lastIndex);

    const totalPages = Math.ceil(blog.length / itemsPerPage);

    //fetch blog by tag
    const fetchBlog = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/api/blog/getblogByTag/${id}`);
            setBlog(res.data.data);
        } catch (error) {
            console.error("Error While Fetch Blog", error);
        }
    }

    useEffect(()=>{
        fetchBlog();
    },[]);

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                   BLOG TAG
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Blog Tag</span>
                </div>
            </div>

        </section>
    </section>

    <section className='py-20 bg-black text-white'>
        <section className="containers">

            <div className='grid gap-5 grid-col-1 md:grid-cols-2 xl:grid-cols-3'>
                {currentBlog.map((item)=>(
                <div key={item.id}>
                    <img src={`http://localhost:8000/uploads/blog/${item.blog_image}`} 
                    style={{maxWidth: "100%", objectFit:"cover"}} 
                    alt="" />

                    <div className='bg-[#2e2e2e]'>
                        <div className='py-[20px] px-[20px] '>
                            <ul className='flex  items-center gap-2 sm:gap-10 mb-[10px]'>
                                <li className='flex items-center gap-2'>
                                    <LuClock3 className='text-emerald-400'/>
                                    {FormateDate(item.blog_date)}
                                </li>
                                <li className='flex items-center gap-2'>
                                    <LiaComment className='text-emerald-400'/>
                                    30 Comments
                                </li>
                            </ul>

                            <h2 onClick={()=>navigate(`blog/details/${item.id}`)}
                            className='text-[18px] sm:text-[24px] font-[700] cursor-pointer hover:text-emerald-400'>
                                {item.blog_title}
                            </h2>

                            <p 
                                dangerouslySetInnerHTML={{__html:item.blog_content.substring(0,200)}}
                                className='text-16px sm:text-[18px] text-[#dbdbdb] font-[500]'>
                            </p>

                            <button onClick={()=>navigate(`/blog/details/${item.id}`)}
                            className="w-fit py-2 text-[14px] sm:text-[16px] md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-4xl bg-emerald-400 text-black font-[700] cursor-pointer hover:bg-white">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
                ))}

            </div>

            <div className="pagination flex justify-center gap-2 mt-8">
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
            
        </section>
    </section>
    </>
  )
}

export default BlogTag
