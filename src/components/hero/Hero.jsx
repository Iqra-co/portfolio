
import React from 'react';
import Image1 from "../../assets/Hero/woman.png";
import Image2 from "../../assets/Hero/shpping.png";
import Image3 from "../../assets/Hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    image: Image1,
    title: "Upto 50% off on men's wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    image: Image2,
    title: "30% off on women's wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: Image3,
    title: "70% off on all products sale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const Hero = ({handleOrderPopup}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div>
      <div
        className="relative overflow-hidden min-h-[550px] 
        sm:min-h-[570px] bg-gray-300 flex
         justify-center items-center dark:bg-gray-950
          dark:text-white duration-200"
      >
        {/* Background pattern */}
        <div
          className="h-[700px] w-[700px] bg-primary/40 
          absolute -top-1/2 right-0 rounded-3xl 
          rotate-45 -z-9"
        ></div>
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 
                sm:grid-cols-2">
                  {/* Text Content Section */}
                  <div
                    className="flex flex-col 
                    justify-center gap-4 pt-12 sm:pt-0 
                    text-center sm:text-left order-2
                     sm:order-1 relative z-10"
                  >
                    <h1 
                    data-aos="zoom-out"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl
                     lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <p 
                     data-aos="fade-up"
                     data-aos-duration="500"
                     data-aos-delay="300"
                     
                    className="text-sm">
                      {data.description}</p>
                    <div
                     data-aos="fade-up"
                     data-aos-duration="500"
                     data-aos-delay="300"
                    >
                      <button
                       onClick={handleOrderPopup }
                        className="bg-gradient-to-r from-primary
                         to-secondary hover:scale-105 
                         duration-200 text-white py-2 px-4 
                         rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="w-[170px] h-[190px] 
                        sm:h-[200px] sm:w-[200px] object-contain mx-auto"
                      />
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

export default Hero;
