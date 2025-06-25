import React from 'react'
import Img1 from '../../assets/women/women.png';
import Img2 from '../../assets/women/women1.png';
import Img3 from '../../assets/women/women2.png';
import Img4 from '../../assets/women/women3.jfif';
import { FaStar } from 'react-icons/fa';
import Img5 from '../../assets/Women/women4.png';
const ProductsData = [
{
    id: 1,
    img: Img1,
    title: "women Ethnic",
    rating: '5.0',
    color:'white',
    aosDelay: '100',
},
{
    id: 2,
    img: Img2,
    title:"women western",
    rating:'4.5',
    color:'red',
    aosDelay:'200',
},
{
    id: 3,
    img: Img3,
    title:"Goggles",
    color:'brown',
    rating:'4.7',
    aosDelay:'400',
},
{
    id: 4,
    img: Img4,
    title:"Printed T-Shirt",
     color:'Yellow',
    rating:'4.4',
    aosDelay:'600',
},
{
    id: 5,
    img: Img5,
    title:"Fashin T-Shirt",
     color:'pink',
    rating:'4.5',
    aosDelay:'800',
},
];

 const Products = () => {
  return (
    <div className='mt-5 mb-8'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-left mb-10
             max-w-[600px]
            '>
                <p 
                data-aos="fade-up"
                 className='text-sm text-primary '>Top Selling Products for you</p>
                <h1  
                data-aos="fade-up"className='text-3xl font-bold'>Products</h1>
                <p 
                data-aos="fade-up" className='text-xs text-gray-400'>sss
                    Lorem ipsum dolor sit amet consectetur
                </p>
            </div>
            {/* Body Section */}
            <div>
                <div  className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5'>
                    {/* Card Section */}
                    {ProductsData.map((data) => (
                            <div
                             key={data.id}
                            
                            className='space-y-3'
                            >
                            <img src={data.img} 
                            alt=''
                            data-aos="fade-up"
                            className='h-[220px] w-[150px]
                            object-cover rounded-md'
                            />
                            <div>
                            <h3 className='font-semibold'>{data.title} </h3>
                           <p className='text-sm text-gray-600  dark:text-white'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400'/>
                                <span>{data.rating}</span></div>
                            </div>

                            </div>
                        ))}
                </div>
                {/* view all button */}
                <div className='flex justify-center '>
                    <button className='text-center mt-10 
                    cursor-pointer bg-primary text-white py-1 px-4 rounded-md '> 
                    view all</button></div>
            </div>
        </div>
        </div>
  )
}
export default Products;