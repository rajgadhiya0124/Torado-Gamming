import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [error,setError] = useState([]);
    const [formData, setFormData] = useState({
        login: "",
        password: "",
        remember: false
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

    try {
        const res = await axios.post("http://localhost:8000/api/user/login",formData,
            {withCredentials: true}
        );

        setFormData({login:"",password:""});
        toast.success(res.data.message);
    } catch (error) {
        console.error("Error While Login");
        setError(error.response?.data?.message);
        console.log(error.response?.data?.message)
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
                   LOG IN
                </h2>
                <div>
                    <Link to={'/'}> Home </Link>/ <span className='text-emerald-400'> LOG IN </span>
                </div>
            </div>

        </section>
    </section>

    <section className='py-25 bg-black text-white'>
        <section className="containers">
            <div className='max-w-[800px] mx-auto'>

                <h2 className='text-[25px] md:text-[36px] font-[700]'>LOG IN</h2>

                <form onSubmit={handleSubmit}  className="mt-4 flex flex-col gap-4">
                    <div>
                        <label htmlFor="first_name" className="block mb-1 font-medium">
                            Username or Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="login"
                            type="text"
                            name="login"
                            placeholder="Username or Login"
                            value={formData.login}
                            onChange={handleChange}
                            className="w-full border-[1px] border-[#898e9a] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block mb-1 font-medium">
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
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-2'>
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                                className="w-4 h-4"
                            />
                            <label htmlFor="remember" className="text-[16px] lg:text-[18px]">
                                Remember Me
                            </label>
                        </div>

                        <Link className='hover:text-emerald-400'>Forgot Password?</Link>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-fit mt-4 py-2 md:py-3 lg:py-4 px-6 md:px-8 lg:px-10 rounded-4xl bg-emerald-400 text-black font-[700] cursor-pointer hover:bg-white"
                    >
                        LOG IN
                    </button>
                </form>

                <div className='flex items-center gap-5 mt-5'>
                    <div className="h-[1.5px] w-full bg-gray-400"></div>
                    <p className='text-center'>Or</p>
                    <div className="h-[1.5px] w-full bg-gray-400"></div>
                </div>

                <div className='flex flex-col gap-5 mt-[30px]'>
                    <button className='w-full bg-[#3b5998] font-[600] py-[15px] cursor-pointer'>
                        LOGIN WITH FACEBOOK
                    </button>
                    <button className='w-full bg-[#ea4335] font-[600] py-[15px] cursor-pointer'>
                        LOGIN WITH GOOGLE
                    </button>

                    <p>Don't have an account? {" "}
                        <Link to={'/register'} className='text-emerald-400'>Join us</Link></p>
                </div>

            </div>
        </section>
    </section>
    </>
  )
}

export default LoginPage
