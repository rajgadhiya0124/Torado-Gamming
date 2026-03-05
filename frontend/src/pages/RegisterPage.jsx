import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        

        if (formData.password !== formData.confirm_password) {
            setError("Passwords do not match!");
            return;
        }

         if (!formData.agree) {
            setError("Please accept Terms and Privacy Policy");
            return;
        }
        try {
            const res = await axios.post("http://localhost:8000/api/user/register",formData);
            setFormData({
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: "",
                confirm_password: "",
            })
            toast.success(res.data.message);
        } catch (error) {
            console.error("Error Whle Register",error);
            console.log(error.response?.data?.message)
            setError(error.response?.data?.message);
            toast.info(error.response?.data?.message)
        }
    }
  return (
    
    <>
    <section className='relative py-[60px] lg:py-[100px] bg-center bg-no-repeat bg-cover ' 
        style={{backgroundImage:"url('/images/contactus/page-bg.jpg')"}}>
        <section className="containers xl:max-w-[1300px] mx-auto px-4">

            <div className='absolute inset-0 bg-black/40'></div>

            <div className='relative text-white text-center z-50'>
                <h2 className='font-[800] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px]'>
                   SIGN UP
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> SIGN UP </span>
                </div>
            </div>

        </section>
    </section>

    <section className='py-25 bg-black text-white'>
        <section className="containers">
            <div className='max-w-[800px] mx-auto'>

                <h2 className='text-[25px] md:text-[36px] font-[700]'>SIGN UP</h2>

                <form onSubmit={handleSubmit}  className="mt-4 flex flex-col gap-4">
                    <div>
                        <label htmlFor="first_name" className="block mb-1 font-medium">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="last_name" className="block mb-1 font-medium">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block mb-1 font-medium">
                            Username <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                            Confirm Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            required
                        />
                    </div>

                    {/* Checkbox */}
                    <div>
                        <label htmlFor="agree" className="flex items-start gap-2">
                            <input
                                id="agree"
                                type="checkbox"
                                name="agree"
                                // required
                                checked={formData.agree}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <span className='text-[16px] lg:text-[18px]'>
                            I agree to the <Link className='text-emerald-400'> Terms </Link> 
                            of Use and <Link className='text-emerald-400'> Privacy Policy </Link>
                            </span>
                        </label>
                    </div>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-fit mt-4 py-2 md:py-3 lg:py-4 px-6 md:px-8 lg:px-10 rounded-4xl bg-emerald-400 text-black font-[700] cursor-pointer hover:bg-white"
                    >
                       CREATE ACCOUNT
                    </button>

                </form>
            </div>
        </section>
    </section>
    </>
  )
}

export default RegisterPage
