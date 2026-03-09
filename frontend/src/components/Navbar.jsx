import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter,FaInstagram } from "react-icons/fa";
import { PiWifiHighBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
    <section className="bg-[#1e2024] text-white py-5">
        <section className='containers'>
            <header className='flex items-center justify-between'>
                <div className='flex gap-6'>
                    <div className='mr-20 '>   
                        <img src="/images/navbar/navbar-logo.png" alt="" />
                    </div>

                    <div className='flex items-center gap-4'>
                        <FaFacebookF className="text-gray-400 hover:text-emerald-400 size-5 cursor-pointer transition" />
                        <FaYoutube className="text-gray-400 hover:text-emerald-400 size-5 cursor-pointer transition" />
                        <FaTwitter className="text-gray-400 hover:text-emfonerald-400 size-5 not-first:cursor-pointer transition" />
                        <FaInstagram className="text-gray-400 hover:text-emerald-400 size-5 cursor-pointer transition" />
                        <PiWifiHighBold className="text-gray-400 hover:text-emerald-400 size-5 cursor-pointer transition" />
                    </div>
                </div>

                <div className='flex gap-2'>
                    <button onClick={()=>navigate('/register')} 
                    className='border-0 px-4 py-2 cursor-pointer rounded-4xl hover:bg-emerald-400 hover:text-black'>
                        SIGNUP
                    </button>
                    <button onClick={()=>navigate('/login')}
                    className='px-6 py-2 border-1 text-sm border-emerald-400 rounded-4xl cursor-pointer hover:bg-emerald-400 hover:text-black '>
                        LOGIN
                    </button>
                </div>
            </header>
        </section>
    </section>

    <section className='bg-[#212529] text-white py-3 z-50'>
        <section className="containers">
            <div className='flex justify-between'>
                <ul className='flex gap-4 pl-60 '>
                    <li className='flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        HOME 
                    </li>

                    <li className='relative group flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        PAGES <MdKeyboardArrowDown />

                        <ul className='absolute left-0 top-10 w-[200px] opacity-0 invisible  group-hover:opacity-100 group-hover:visible z-100'>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] border-dotted border-b-1 cursor-pointer">
                                ABOUT US
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                <Link to={'/team'}>TEAM</Link>
                            </li>
                            <li className="relative group/match px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] border-dotted border-b-1 cursor-pointer">
                                MATCH

                                <ul className='absolute left-[200px] top-0 w-[200px] opacity-0 invisible  group-hover/match:opacity-100 group-hover/match:visible z-100'>
                                    <li className="px-4 py-2 text-white hover:text-emerald-400 bg-[#17181b] border-b cursor-pointer">
                                        <Link to="/match">MATCHES</Link>
                                    </li>
                                    <li className="px-4 py-2 text-white hover:text-emerald-400 bg-[#17181b] border-b cursor-pointer">
                                        <Link to="/matches">ALL MATCHES</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                USER
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                OTHERS
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                <Link to={'/gallery'}>GALLERY</Link>
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                LIVE STREAMING
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                <Link to={'/faqs'}>FAQ </Link>
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                <Link to={'/partner'}>PARTNERS </Link>
                            </li>
                        </ul>
                    </li>

                    <li className='relative group flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        TOURNAMENTS <MdKeyboardArrowDown />

                        <ul className='absolute left-0 top-10 w-[200px] opacity-0 invisible  group-hover:opacity-100 group-hover:visible z-100'>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] border-dotted border-b-1 cursor-pointer">
                                TOURNAMENTS
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                TOURNAMENTS DETAILS
                            </li>
                        </ul>
                    </li>

                    <li className='relative group flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        FORUMS <MdKeyboardArrowDown />

                        <ul className='absolute left-0 top-10 w-[200px] opacity-0 invisible  group-hover:opacity-100 group-hover:visible z-100'>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] border-dotted border-b-1 cursor-pointer">
                                FORUMS
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                FROUMS DETAILS
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                FORUM GENRAL RULES
                            </li>
                        </ul>
                    </li>

                    <li className='relative group flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        SHOP <MdKeyboardArrowDown />

                        <ul className='absolute left-0 top-10 w-[200px] opacity-0 invisible  group-hover:opacity-100 group-hover:visible z-100'>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] border-dotted border-b-1 cursor-pointer">
                                SHOP
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                CART
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                CHECK OUT 
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                PRODUCT DETAILS
                            </li>
                        </ul>
                    </li>

                    <li className='relative group flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        BLOG <MdKeyboardArrowDown />

                        <ul className='absolute left-0 top-10 w-[200px] opacity-0 invisible  group-hover:opacity-100 group-hover:visible z-100'>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] border-dotted border-b-1 cursor-pointer">
                                <Link to={'/blog'}> BLOG </Link>
                            </li>
                            <li className="px-4 py-2 font-[600] hover:text-emerald-400 bg-[#17181b] order-dotted border-b-1 cursor-pointer">
                                BLOG DETAILS
                            </li>
                        </ul>

                    </li>
                    <li className='flex items-center gap-2 text-[16px] font-medium cursor-pointer'>
                        <Link to={'/contactus'}>CONTACT US</Link> 
                    </li>
                </ul>
            
                {/* search input */}
                <div className='relative flex '>
                    <input 
                        type="text"  
                        placeholder='Search here...'
                        className='w-full border border-gray-300 pl-5 pr-4 py-2 rounded-4xl 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white'
                    />
                    <span className="absolute right-3 top-3 text-gray-400">
                        <IoSearchSharp className='size-5' />
                    </span>
                </div>
        
            </div>
        </section>
    </section>
    </>
  )
}

export default Navbar
