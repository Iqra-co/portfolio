// import React from 'react'
// import footerLogo from "../../assets/Logo.png";
// import Banner from "../../assets/Website/footer-pattern.jpg"
// import { TbBackground } from 'react-icons/tb';
// import { FaInstagram, FaFacebook,FaLinkedin,FaLocationArrow,FaMobileAlt } from 'react-icons/fa';

// const BannerImg = {
//     backgroundImage: `url(${Banner})`,
//     backgroundPosition: "bottom",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };

  
  
// const FooterLinks = [
// {
//     title:"Home",
//     link: "/#",
// },
// {
//     title:"About",
//     link: "/#about",
// },
// {
//     title:"Contact",
//     link: "/#contact",
// },
// {
//     title:"Blog",
//     link: "/#blog",
// },
// ]

// const Footer = () => {
//   return (
//     <div style={BannerImg}
//      className ='text-white mb-0'>
//         <div className='container'>
//             <div
//              data-aos="zoom-in" 
//             className='grid md:grid-cols-3 pb-44 pt-5'>
//                 {/* company details */}
//                 <div className='py-8 px-4 '>
//                     <h1 className='sm:text-3xl text-xl font-bold 
//                     sm:text-left text-justify mb-3 
//                     flex item-center gap-3'
//                     >
//                         <img src={footerLogo} alt=""
//                         className=' max-w-[50px]'/>
//                         Shopsy
//                     </h1>
//                     <p>
//                     Lorem ipsum, dolor sit amet consectetur 
                      
//                         adipisicing elit. Quam quaerat, 
//                          voluptatum quisquam recusandae dolores
//                           quo sit facilis voluptates. 
//                         Repellendus ab hic nostrum non laborum.
//                         </p>
//                 </div>
//                 {/* footer Links */}
//                 <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
//                     <div className=''>
//                         <div className='py-8 px-4 '>
//                             <h1 className='sm:text-3xl text-xl
//                             font-bold sm:text-left text-justify mb-3'>
//                                 Important Links
//                                 </h1>
//                                 <ul className='flex flex-col gap-3'>
//                                 {
//   FooterLinks.map((link) => {
//     return (
//       <li
//         className='cursor-pointer
//          hover:text-primary 
//          hover:translate-x-1 duration-300
//           text-gray-200'
//         key={link.title}
//       >
//         <span>{link.title}</span>
//       </li>
//     );
//   })
// }

//                                 </ul>
//                         </div>
//                     </div>
//                     {/* Social Links */}
//                     <div>
//                       <div className='flex items-center gap-3 
//                       mt-6'
//                       >
//                         <a href='#'>
//                           <FaInstagram className='text-3xl' /> 
//                         </a>
//                         <a href='#'>
//                           <FaFacebook className='text-3xl' /> 
//                         </a>
//                         <a href='#'>
//                           <FaLinkedin className='text-3xl' /> 
//                         </a>

//                       </div>
//                       <div className='mt-6'>
//                         <div className='flex item-center gap-3'>
//                           <FaLocationArrow/>
//                           <p>pakistan Lahore</p>
//                         </div>
//                         <div className='flex item-center gap-3'>
//                           <FaMobileAlt/>
//                           <p>+91 54656456</p>
//                         </div>

//                       </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//   )
// }

// export default Footer



import React from 'react';
import footerLogo from "../../assets/Logo.png";
import Banner from "../../assets/Website/footer-pattern.jpg";
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
  backgroundImage: `url(${Banner})`, // ✅ Fixed syntax
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-0'>
      <div className='container px-4'>
        <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 pt-10'>
          {/* Company details */}
          <div className='py-4'>
            <h1 className='text-2xl sm:text-3xl font-bold flex items-center gap-3 mb-3'>
              <img src={footerLogo} alt="Logo" className='max-w-[50px]' />
              Shopsy
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quaerat, voluptatum
              quisquam recusandae dolores quo sit facilis voluptates. Repellendus ab hic nostrum non laborum.
            </p>
          </div>

          {/* Important Links */}
          <div className='py-4'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-3'>Important Links</h1>
            <ul className='flex flex-col gap-3'>
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Info */}
          <div className='py-4'>
            {/* Social Icons */}
            <div className='flex flex-wrap items-center gap-4 mt-6 text-xl sm:text-2xl'>
              <a href='#' className='hover:text-primary transition'>
                <FaInstagram />
              </a>
              <a href='#' className='hover:text-primary transition'>
                <FaFacebook />
              </a>
              <a href='#' className='hover:text-primary transition'>
                <FaLinkedin />
              </a>
            </div>

            {/* Contact Info */}
            <div className='mt-6 space-y-3'>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Pakistan, Lahore</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaMobileAlt />
                <p>+92 54656456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
