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

                <h1 className='sm:text-5xl text-4xl font-bold'>I'm Kerim Imamović</h1>

                <h2 className='flex sm:text-3xl text-2xl pt-4'>I'm
                    <TypeAnimation
                        sequence={[
                            'learning', 1000, 
                            'Frontend', 1000, 
                            'Development', 1000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{paddingLeft: '10px' }}
                    />
                </h2>

                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaGithub size={20} className='cursor-pointer'/>
                    <FaFacebook size={20} className='cursor-pointer'/>
                    <FaInstagram size={20} className='cursor-pointer'/>
                    <FaLinkedin size={20} className='cursor-pointer'/>
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
