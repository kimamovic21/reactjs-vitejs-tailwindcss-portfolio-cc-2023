import React from 'react';

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>

        <img src={img} alt="project" className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='font-bold text-white tracking-wider text-center'>{title}</h3>
            <a href="/">
                <button className='mt-2 text-center p-3 rounded-lg bg-white text-gray-800 font-bold cursor-pointer text-lg'>More info</button>
            </a>
        </div>


    </div>
  );
};

export default ProjectItem;




// 1. stiliziramo roditelj div element
// 2. dodajemo i stiliziramo HTML elemente
// 3. ProjectItem funkciji dodajemo img i title parametre
