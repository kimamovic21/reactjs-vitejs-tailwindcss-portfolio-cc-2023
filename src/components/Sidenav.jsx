import React, { useState } from 'react';
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiOutlineClose} from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr';
import {BsPerson} from 'react-icons/bs';

const Sidenav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log('State changed!');
  };

  return (
    <div>

      {/* handleNav will toggle our state back and forth */}
      { nav ?  
        (<AiOutlineClose size={40} onClick={handleNav} className='fixed top-4 right-4 z-[99] cursor-pointer md:hidden text-black bg-white/90 p-2 rounded-full'/>) : 
        (<AiOutlineMenu size={40} onClick={handleNav} className='fixed top-4 right-4 z-[99] cursor-pointer md:hidden text-white bg-black/50 p-2 rounded-full'/>)
      }

      {/* if nav state is true */}
      {
        nav ? (
          <div className='fixed w-full h-screen bg-black/80 flex flex-col justify-center items-center z-20'>
              <a href="#main" 
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'
                 onClick={handleNav}
              >
                  <AiOutlineHome size={20}/>
                  <span className='pl-4'>Home</span>
              </a>
              <a href="#work" 
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'
                 onClick={handleNav} 
              >
                  <GrProjects size={20}/>
                  <span className='pl-4'>Work</span>
              </a>
              <a href="#projects"
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'
                 onClick={handleNav} 
              >
                  <AiOutlineProject size={20}/>
                  <span className='pl-4'>Projects</span>
              </a>
              <a href="#main" 
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'
                 onClick={handleNav}
              >
                  <BsPerson size={20}/>
                  <span className='pl-4'>Resume</span>
              </a>
              <a href="#contact" 
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'
                 onClick={handleNav}
              >
                  <AiOutlineMail size={20}/>
                  <span className='pl-4'>Contact</span>
              </a>
          </div>
        ) : (
          ''
        )
      }

      <div className='hidden md:block fixed top-[20%] z-10'>
        <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'>
              <AiOutlineHome size={20}/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'>
              <GrProjects size={20}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'>
              <AiOutlineProject size={20}/>
            </a>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'>
              <BsPerson size={20}/>
            </a>
            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-105 ease-in-out duration-200'>
              <AiOutlineMail size={20}/>
            </a>
        </div>
      </div>

    </div>
  );
};

export default Sidenav;




// 1. importujemo useState
// 2. dodajemo i stiliziramo react ikonicu
// 3. dodajemo funkciju handleNav
// 4. dodajemo onClick dogadaj react ikonici
// 5. dodajemo uslov za nav stanje
// 6. za prvi uslov dodajemo div roditelj element a za drugi uslov' '
// 7. unutar div roditelj elementa dodajemo a element i unutar njega react ikonice i span elemente
// 8. ispod uslova za nav stanje dodajemo div element
// 9. unutar tog div elementa dodajemo jos jedan div element
// 10. unutar div elementa dodajemo a element 
// 11. unutar a elementa dodajemo react ikonice i span elemente
