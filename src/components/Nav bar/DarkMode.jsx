// import React from 'react'
// import LightButton from '../../assets/Website/light-mode-button.jpg'
// import DarkButton from '../../assets/Website/dark-mode-button.jpg'
// const DarkMode = () => {
// const [theme, setTheme] = React.useState(
//   localStorage.getItem('theme') ? localStorage.getItem
//   ('theme') : "light"
//  );
//  const element = document.documentElement;
//  console.log(element);
//  React.useEffect(() => {
//   if (theme === "dark"){
//     element.classList.add('dark');
//     localStorage.setItem('theme','dark');
//   } else {
// element.classList.remove('dark');
// localStorage.setItem('theme', 'light')
//   }
//  },[theme]
// );
// const toggleTheme = () => {
//   setTheme(theme === 'light' ? 'dark' : 'light');
// };
//   return (
//     <div className='relative'>
//    <img 
//    src={LightButton}
//     alt='' 
//     onClick={() => setTheme(theme === 'light' ? 'dark' : 'light' )}
//     className='w-12 cursor-pointer drop-shadow
//     [1px_1px_1px_rgba(0,0,0,0.1)] transition-all 
//     duration-300 absolute right-0 z-10' ${...theme === 'dark' ? 'opacity-0' : 'opacity-100' }
//     />
//     <img 
//     src={DarkButton} 
//     alt='' 
//     onClick={() => setTheme(theme === 'light' ? 'dark' : 'light' )}
//     className='w-12 cursor-pointer drop-shadow
//     [1px_1px_1px_rgba(0,0,0,0.1)] transition-all 
//     duration-300'
//     />

//    </div>
//   )
// }

// export default DarkMode;

import React from 'react';
import LightButton from '../../assets/Website/light-mode-button.jpg'; // Light mode image
import DarkButton from '../../assets/Website/dark-mode-button.jpg'; // Dark mode image

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
//   );

//   const element = document.documentElement;

//   React.useEffect(() => {
//     if (theme === 'dark') {
//       element.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       element.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem
    ('theme') : "light"
   );
   const element = document.documentElement;
   console.log(element);
   React.useEffect(() => {
    if (theme === "dark"){
      element.classList.add('dark');
      localStorage.setItem('theme','dark');
    } else {
  element.classList.remove('dark');
  localStorage.setItem('theme', 'light')
    }
   },[theme]
  );
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
          theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'}`}
      >
        <img
          src={theme === 'light' ? LightButton : DarkButton}
          alt={theme === 'light' ? 'Light Mode' : 'Dark Mode'}
          className="w-6 h-6 rounded-full transform transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default DarkMode;
