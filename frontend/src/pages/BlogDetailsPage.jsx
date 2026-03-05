
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import { IoSearch } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { LiaComment } from 'react-icons/lia';
import FormateDate from '../components/FormateDate';
import { TiSocialFacebook, TiSocialLinkedin  } from "react-icons/ti";
import { FaInstagram, FaTwitter  } from "react-icons/fa";
import formateReletiveTime from '../utils/formatRelativeTime';

const BlogDetailsPage = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [blogCategory , setBlogCategory] = useState([]);
    const [blogTag , setBlogTag] = useState([]);

    const [comment, setComment]= useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website_link: "",
        comment: "",
        saveInfo: false,
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("blogCommentInfo"));
        if (savedData) {
            setFormData({ ...savedData, comment: "", saveInfo: true });
        }
    }, []);

    
    //fetch blog
    const fetchBlog = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/api/blog/getById/${id}`,
                {withCredentials: true}
            );

            setBlog(res.data.data)
        } catch (error) {
            console.error("Error While Fetch Blog",error);
        }
    }

    useEffect(()=>{
        fetchBlog()
    },[id]);

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
        fetchBlogCategory();
        fetchBlogTag();
    },[]);

    //blog comment form
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const hanldeSbmit = async(e)=>{
        e.preventDefault();

        if(formData.saveInfo){
            localStorage.setItem("blogCommentInfo", JSON.stringify({ 
                name: formData.name,
                email: formData.email,
                website_link: formData.website_link,
            }))
        }else{ localStorage.removeItem("blogCommentInfo")};

        try {
            const res = await axios.post(`http://localhost:8000/api/blog/comment/create`,
                {
                    ...formData ,
                    blog_id: id
                },
                {withCredentials: true}
            );
            setFormData({...formData ,comment: ""})
            toast.success(res.data.message);
        } catch (error) {
            console.error("Error While submit form",error);
            console.log(error.response.data.message)
        }
    }

    //fetch blog comment
    const fetchComment = async()=>{
        try {
            const res = await axios.get(`http://localhost:8000/api/blog/comment/getByBlog/${id}`)
            setComment(res.data.data);
        } catch (error) {
            console.error("Error Ehile Fetch Comment",error);
        }
    }
    useEffect(()=>{
        fetchComment();
    },[]);


  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                   BLOG DETAILS
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Blog Details </span>
                </div>
            </div>

        </section>
    </section>

    <section className='py-15 sm:py-25 bg-black text-white'>
            <section className="containers">
    
                <div className="grid grid-cols-12 gap-6">
                    <div className='col-span-12 lg:col-span-8'>
                        
                        <div className=''>
                            <img src={`http://localhost:8000/uploads/blog/${blog?.blog_image}`} alt="" />

                            <div className='mt-5'>
                                <ul className='flex items-center gap-10 mb-[10px]'>
                                    <li className='flex items-center gap-2'>
                                        <LuClock3 className='text-emerald-400'/>
                                        {FormateDate(blog.blog_date)}
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <LiaComment className='text-emerald-400'/>
                                        {blog.total_comments} Comments
                                    </li>
                                </ul>

                                <h2 className='text-[22px] sm:text-[30px] font-[700] cursor-pointer hover:text-emerald-400'>
                                    {blog.blog_title}
                                </h2>

                                <div className='blog-content'
                                    dangerouslySetInnerHTML={{__html:blog.blog_content}}>
                                </div>

                                <div className='flex flex-col sm:flex-row justify-between gap-3'>
                                    <div className='flex gap-3 text-[18px]'>
                                        <span className='text-[16px] lg:text-[18px] font-[600]'>Tags:</span>
                                        <ul className=''>
                                            <li>{blog.tag_name}</li>
                                        </ul>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-[16px] lg:text-[18px] font-[600]'>Sheare:</span>
                                        <ul className='flex text-[20px] gap-3 cursor-pointer'>
                                            <li><TiSocialFacebook /></li>
                                            <li><FaInstagram /></li>
                                            <li><TiSocialLinkedin /></li>
                                            <li><FaTwitter /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* blog comments */}
                        {comment.map((item)=>(
                        <div className='mt-10 flex flex-col lg:flex-row  items-start gap-3' key={item.id}>
                            <div className='bg-emerald-500 text-[20px] font-[700] w-12 h-12 flex items-center justify-center rounded-full'>
                                {item.name?.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <h4 className='text-[20px] font-[700]'>{item.name}</h4>
                                <p>{formateReletiveTime(item.createdAt)}</p>

                                <p className='mt-2'> {item.comment}</p>

                                <Link className='block mt-3 text-emerald-400 font-[600]'>REPLAY</Link>
                            </div>

                        </div>
                        ))}

                        {/* comment form */}
                        <div className='py-15'>
                            <h2 className='text-[25px] font-[600]'>ADD COMMENT</h2>
                            <p>Your email address will not be published. Required fields are marked*</p>

                            <form onSubmit={hanldeSbmit} className="mt-5">
        
                                <div className="w-full flex flex-col sm:flex-row gap-0 sm:gap-4">
                                    <div className='w-1/1 sm:w-1/2 mb-5'>
                                        <label className="flex mb-2">Name*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-400 px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                        />
                                    </div>

                                    <div className='w-1/1 sm:w-1/2 mb-5'>
                                        <label className="flex mb-2">Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-400 px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                        />
                                    </div>
                                </div>

                                <div className='mb-5'>
                                    <label className="flex mb-2">Your Website Link</label>
                                    <input
                                        type="url"
                                        name="website_link"
                                        placeholder="Website"
                                        value={formData.website_link}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                    />
                                </div>

                                <div className='mb-5'>
                                <label className="flex mb-2">Comment</label>
                                <textarea
                                    name="comment"
                                    rows="8"
                                    placeholder="Your Comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-400 px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                ></textarea>
                                </div>

                                
                                <div className="mb-5 flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="saveInfo"
                                        checked={formData.saveInfo}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                    <label className="text-[15px] lg:text-[18px] text-gray-400">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="bg-emerald-400 text-black font-[600] py-2 lg:py-3 px-6 lg:px-10 rounded-4xl hover:bg-green-700 transition"
                                >
                                    SUBMIT
                                </button>
                            </form> 
                        </div>

                    </div>
    
                    <div className="col-span-12 lg:col-span-4">
    
                        {/* search bar */}
                        <div className='relative'>
                            <input type="text" name="" id="" 
                            placeholder='Search...'
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
                                    
                                        <li className='flex justify-between text-[16px] sm:text-[18px] text-[#abb2bf] cursor-pointer hover:text-emerald-400'>
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
                                        <li className='text-[16px] sm:text-[18px] text-[#abb2bf] cursor-pointer hover:text-emerald-400'>
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

    </>
  )
}

export default BlogDetailsPage
