import React from 'react'

import Banner from '../../assets/Website/orange-pattern.jfif'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

 const Subscribe = () => {
  return (
    <div
    data-aos="zoom-in"
    className=' mb-5 bg-gray-100 dark:bg-gray-800
     text-white '
    style= {BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
            <div className=' space-y-6 max-x-xl mx-auto '>
                <h1 className='text-2xl text-center
                 sm:text-left sm:text-4xl font-semibold'>
                    Get Notification About New Products
                    </h1>
                    <input 
                    data-aos="fade-up"
                    type="text"
                    placeholder="Enter your Email"
                    className="w-full p-3 mt-4
                     text-black rounded
                     " />

            </div>
        </div>
    </div>
  )
}
export default Subscribe;
