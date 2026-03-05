import React from 'react'

const HomeCommunity = () => {
  return (
    // home coummunity seection
    <section className='py-25 bg-right bg-no-repeat bg-cover bg-fixed text-white'
        style={{backgroundImage: "url('/images/home/community/join-our-community-bg.jpg')"}}    
    >
        <section className="containers">
            
            <div className='p-[80px] max-w-[850px] leading-none bg-[#1e2024bf]'>
                <h2 className='text-[72px] font-[800] mb-5'>
                    JOIN OUR <span className='text-emerald-400'>COMMUNITY </span>
                    TO GET ALL KINDS OF BENEFITS OF GAMING!
                </h2>

                <button className='bg-emerald-400 text-black font-[600] rounded-4xl px-[40px] py-[20px]'>
                    JOIN COUMMUNITY
                </button>
            </div>

        </section>
    </section>
  )
}

export default HomeCommunity
