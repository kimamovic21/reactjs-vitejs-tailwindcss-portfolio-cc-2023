import React from 'react';
import Kerim from '../images/kerim.jpg';
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Hero = () => {
  return (
    <main id='main'>

        <img src={Kerim} 
             alt="Kerim Imamovic" 
             className='w-full h-screen object-cover'     
        />

        <div className='w-full h-screen absolute top-0 left-0 bg-black/30'>

            <div className='text-white max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>

                <h1 className='sm:text-5xl text-4xl font-bold'>Hi, I'm Kerim Imamović</h1>

                <h2 className='flex sm:text-3xl text-2xl pt-4'>
                    <TypeAnimation
                        sequence={[
                            'I come from Sarajevo, B&H', 500,
                            'I am learning Frontend Development', 500, 
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{paddingLeft: '5px' }}
                    />
                </h2>

                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://github.com/kimamovic21/"
                       target='_blank'
                    >
                        <FaGithub size={30} className='cursor-pointer hover:scale-110 duration-100 ease-in-out'/>
                    </a>
                    <a href="https://www.facebook.com/imamovic.kerim"          
                       target='_blank'
                    >
                        <FaFacebook size={30} className='cursor-pointer hover:scale-110 duration-100 ease-in-out'/>
                    </a>
                    <a href="https://www.instagram.com/k_imamovic" 
                       target='_blank'
                    >
                        <FaInstagram size={30} className='cursor-pointer hover:scale-110 duration-100 ease-in-out'/>
                    </a>
                    <a href="https://www.linkedin.com/in/kerim-imamovic-261918165" 
                       target='_blank'
                    >
                        <FaLinkedin size={30} className='cursor-pointer hover:scale-110 duration-100 ease-in-out'/>
                    </a>
                </div>

            </div>

        </div>

    </main>
  );
};

export default Hero;




// 1. stiliziramo roditelj div element
// 2. importujemo sliku
// 3. dodajemo i stiliziramo HTML elemente
// 4. importujemo TypeAnimation paket
// 5. uredujemo TypeAnimation element
// 6. dodajemo i stiliziramo div u kojem se nalaze react ikonice
// 7. stiliziramo react ikonice
