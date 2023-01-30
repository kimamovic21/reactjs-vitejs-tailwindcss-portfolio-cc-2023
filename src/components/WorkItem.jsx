import React from 'react';

const WorkItem = ({icon, title, description}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-gray-300'>

        <li className='mb-10 ml-4'>
            {/* Small circle */}
            <div className='absolute w-3 h-3 bg-gray-500 rounded-full mt-5 left-[-0.4rem]'></div>

            <p className='flex gap-4 items-center font-bold text-[1rem] md:text-[1.5rem]'>
                <span className='px-1 py-1'>{icon}</span>
                <span>{title}</span>
            </p>

            <p className='pt-2 text-gray-700'>{description}</p>
        </li>

    </ol>
  );
};

export default WorkItem;




// 1. stiliziramo div roditelj element
// 2. dodajemo i stiliziramo HTML elemente
// 3. dodajemo parametre WorkItem funkciji
