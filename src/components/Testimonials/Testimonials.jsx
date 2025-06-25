// import React from 'react'
// import Slider from "react-slick"
// const TestimonialsData = [
//   {
//     id: 1,
//     name: 'Hamza',
//     text: "Lorem ipsum dolor sit amet...",
//     img: 'https://picsum.photos/id/1011/100/100', // or use Unsplash direct image link
//   },
//   {
//     id: 2,
//     name: 'Haris',
//     text: "Lorem ipsum dolor sit amet...",
//     img: 'https://picsum.photos/id/1012/100/100',
//   },
//   {
//     id: 3,
//     name: 'Ahmad',
//     text: "Lorem ipsum dolor sit amet...",
//     img: 'https://picsum.photos/id/1013/100/100',
//   },
//   {
//     id: 4,
//     name: 'Ali',
//     text: "Lorem ipsum dolor sit amet...",
//     img: 'https://picsum.photos/id/1015/100/100',
//   },
// ]
// const Testimonials = () => {
//     var settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         CssEase: 'linear',
//         PauseOnHover: true,
//         PauseOnFocus: true,
//         responsive: [
//             {
//                 breakpoints: 1000,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 },
//             },
//             {
//                 breakpoints: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoints: 640,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };
//   return (
//     <div
//      data-aos="fade-up"
//       className='py-5 mb-8'>
//         <div className='container'>
//             {/* header Section */}
//             <div className='text-left mb-8 max-w-[600px]
//             mx-auto'>
//                 <p data-aos="fade-up" className='text-sm
//                  text-primary '>
//                     What our Customer are saying
//                     </p>
//                 <h1 data-aos="fade-up" className='text-3xl 
//                 font-bold'>
//                     Testimonials
//                     </h1>
//                 <p 
//                 data-aos="fade-up" className='text-xs
//                  text-gray-400'>
//                     Lorem ipsum dolor sit amet consectetur
//                     adipisicing elit. sit 
//                     dolor fuga pariatur quia fugit non, 
//                     velit totam accusamus aspernatur!
//                 </p>
//             </div>
//             {/* Testimonials cards */}
//             <div 
            
//             >
//              <Slider {...settings}> 
//                 {TestimonialsData.map((data) => (
//   <div key={data.id} className='my-6'>
//     <div
//       className='flex flex-col gap-2 shadow-lg
//       py-8 px-6 mx-4 rounded-xl
//       dark:bg-gray-800
//       bg-primary/10 relative'
//     >
//       <div className='mb-4'>
//         <img
//           src={data.img}
//           alt=''
//           className='rounded-full w-20 h-20'
//         />
//       </div>
//       <div className='flex flex-col items-center gap-4'>
//         <div className='space-y-3'>
//           <p className='text-xs text-gray-500'>
//             {data.text}
//           </p>
//           <h1 className='text-xl font-bold text-black/80 dark:text-light'>
//             {data.name}
//           </h1>
//         </div>
//       </div>
//       <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
//     </div>
//   </div>
// ))}

//              </Slider>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Testimonials


import React from 'react';
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';

// Testimonials data
const TestimonialsData = [
  {
    id: 1,
    name: 'Roha',
    text: "Lorem ipsum dolor sit amet...",
    img: 'https://picsum.photos/id/1011/100/100',
  },
  {
    id: 2,
    name: 'Ayesha',
    text: "Lorem ipsum dolor sit amet...",
    img: 'https://picsum.photos/id/1012/100/100',
  },
  {
    id: 3,
    name: 'Fari',
    text: "Lorem ipsum dolor sit amet...",
    img: 'https://picsum.photos/id/1013/100/100',
  },
  {
    id: 4,
    name: 'Hooria',
    text: "Lorem ipsum dolor sit amet...",
    img: 'https://picsum.photos/id/1015/100/100',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" className='py-5 mb-8'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-left mb-8 max-w-[600px]'>
          <p className='text-sm text-primary'>What our Customers are saying</p>
          <h1 className='text-3xl font-bold'>Testimonials</h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Slider */}
        <div className='overflow-hidden'>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className='px-3'>
                <div className='flex flex-col gap-2 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative h-full'>
                  <div className='mb-4 flex justify-center'>
                    <img
                      src={data.img}
                      alt={data.name}
                      className='rounded-full w-20 h-20'
                    />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3 text-center'>
                      <p className='text-xs text-gray-500 dark:text-white '>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-white'>
                        {data.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
