import React from 'react'
import {Link} from "react-router-dom"
import { MdOutlineMail, MdOutlinePhone, MdLocationOn } from "react-icons/md";
import { TiSocialFacebook,TiSocialTwitter  } from "react-icons/ti";
import { FaYoutube, FaInstagram  } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { useState } from 'react';
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from 'react';
import HomePartner from '../components/HomePartner';

const ContactPage = () => {

    const [contactInfo, setContactInfo] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agree: false,
    });

    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };
 

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:8000/api/contactus/create`,formData);
            setFormData({name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            })
            toast.success(res.data?.message);
        } catch (error) {
            console.error("Error While Submit Contact Form",error);
            console.log(error.response?.data?.message)
         }
    }
      
    //fetch contact info
    const fetchContactInfo = async()=>{
        try {
            const res= await axios.get("http://localhost:8000/api/contactInfo/getall");
            setContactInfo(res.data.data);
        } catch (error) {
            console.error("Error While Get Contact Info",error);
        }
    }
    useEffect(()=>{
        fetchContactInfo();
    },[]);

    const iconMap = {
        email: MdOutlineMail,
        phone: MdOutlinePhone,
        address: MdLocationOn,
    };

  return (
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                    CONTACT US
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> Contact US </span>
                </div>
            </div>

        </section>
    </section>
{/* xl:max-w-[1300px] mx-auto px-4 */}
    <section className='py-12 md:py-25 bg-black text-white'>
        <section className="containers">
            <div className='grid grid-cols-12 gap-6'>
                
                <div className="col-span-12 lg:col-span-8">
                    <div>
                        <h2 className='text-[25px] md:text-[36px] font-[700]'>READY TO GET STARTED?</h2>

                        <form action="" className='flex flex-col gap-5 mt-4' onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-1 font-medium">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-1 font-medium">
                                Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                className="w-full border px-4 py-4 focus:outline-none focus:ring-1 focus: ring-emerald-400"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block mb-1 font-medium">
                                Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block mb-1 font-medium">
                                Subject 
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-1 font-medium">
                                   Write Message 
                                </label>
                                <textarea
                                    name="message"
                                    rows="8"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                className="w-full border px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                ></textarea>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    required
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="mt-1 "
                                />
                                <p className="text-sm text-gray-400 text-[18px]">
                                    Your email address will not be published. Required fields are marked
                                </p>
                            </div>

                            <button type='submit'
                                className="w-fit mt-4 py-2 md:py-3 lg:py-4 px-6 md:px-8 lg:px-10 rounded-4xl bg-emerald-400 text-black font-[700] cursor-pointer hover:bg-white"
                            >
                                SUBMIT MESSAGE
                            </button>
                            
                        </form>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-4'>
                    <h2 className='text-[25px] md:text-[36px] font-[700]'>GET IN TOUCH</h2>

                    <div className='flex flex-col gap-8 mt-5'>

                        {contactInfo.map((item)=>{
                            const Icon = iconMap[item.contactinfo_type]

                            return(
                            <div className='flex gap-3' key={item.id}>
                                <Icon className='text-[25px] text-emerald-400'/> 
                                <div>
                                    <p className='text-[16px] lg:text-[18px] font-[700] '>{item.contactinfo_title}</p>
                                    <Link className='text-[16px] lg:text-[18px] text-gray-300'>
                                        {item.contactinfo_value}
                                    </Link>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    
                    <div className='mt-5 pl-[25px] '>
                        <span className='text-[18px] font-[700]'>Social</span>
                        <ul className='mt-3 flex items-center gap-5 text-[22px] text-gray-300'>
                            <li><TiSocialFacebook /></li>
                            <li><TiSocialTwitter /></li>
                            <li><FaYoutube /></li>
                            <li><FaInstagram /></li>
                            <li><TbMessage /></li>
                            <li><IoWifi /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.3074748692725!2d-111.93366122484184!3d33.62326874026065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7415b3efaae7%3A0xfc4c071752b6d41e!2s15124%20N%20Kierland%20Blvd%20%23112%2C%20Scottsdale%2C%20AZ%2085254%2C%20USA!5e0!3m2!1sen!2sin!4v1772171175936!5m2!1sen!2sin" 
            width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <HomePartner />
            
    </>
  )
}

export default ContactPage
