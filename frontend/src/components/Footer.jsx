import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { MdSend } from "react-icons/md";
import { MdOutlineCopyright } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";

const Footer = () => {

    const [language, setLanguage] = useState("en");

  return (
    <>
    <section className='bg-black py-20 text-white'>
        <section className="containers">
            <div className='pb-20 grid grid-cols-4 gap-2 '>
                <div>
                    <img src="/images/navbar/navbar-logo.png" alt="" />
                    <div>
                        <ul className='mt-4'>
                            <li className='flex gap-4'>
                                <span className='text-emerald-400'>Phone:</span>
                                <Link className= 'text-gray-300 hover:text-emerald-400  hover:cursor-pointer'>
                                    +1 (514) 984 2020
                                </Link>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-emerald-400'>Address:</span>
                                <Link className= 'text-gray-300 hover:text-emerald-400  hover:cursor-pointer'>
                                    15124 North Kierland Blvd. <br />Suite 112 Scottsdale
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold text-xl'>COMMUNITY</h2>
                    <ul className='mt-1.5'>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link>About Us</Link></li>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link>Contact Us</Link></li>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link> Forums </Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold text-xl'>SUPPORT</h2>
                    <ul className='mt-1.5'>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link>Privacy Policy</Link></li>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link>Terms & Conditions</Link></li>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link> Our Team </Link></li>
                        <li className='py-1 text-gray-300 hover:text-emerald-400'><Link> Support Center </Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-semibold text-xl mb-5'>NEWSLETTER</h2>
                    <p>
                        Sign up now for weekly news and updates
                    </p>

                    <div className='relative flex mt-5'>
                        <input 
                            type="text"  
                            placeholder='Search here...'
                            className='w-full py-3  px-5 bg-[#1b1d21]
                            focus:outline-none focus:ring-1 focus:ring-emerald-400 placeholder-white'
                        />
                        <span className="absolute right-3 top-3 text-gray-400">
                            <MdSend className='size-5' />
                        </span>
                    </div>
                </div>
            </div>

            <hr className='text-gray-500'/>
                <div className="flex justify-between">
                    <div className='flex items-center gap-2'>
                        <MdOutlineCopyright />
                        <p> Torado is Proudly Owned by EnvyTheme</p>
                    </div>

                    <div>
                        <div className="w-40 flex items-center">
                            <FaLanguage className='text-xl text-emerald-400'/>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-fit border-none px-3 py-2 rounded-md "
                            >
                                <option value="en" className='text-black'>English</option>
                                <option value="hi" className='text-black'>Hindi</option>
                                <option value="gu" className='text-black'>Gujarati</option>
                            </select>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <button onClick={()=>window.scrollTo({top: 0 , behavior:"smooth"})}
    className='fixed z-50 bottom-20 right-15 bg-emerald-400 text-white text-[20px] p-[10px] cursor-pointer'>
        <TiArrowSortedUp />
    </button>
    </>
  )
}

export default Footer
