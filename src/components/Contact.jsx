import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1024px] m-auto md:pl-20 p-4 py-16'>

        <h2 className='py-4 text-3xl md:text-4xl font-bold text-center text-[#333] tracking-wider'>Contact</h2>

        <form action='https://getform.io/f/dca02e7e-afff-4d0f-98a4-7ccc66ea5d33' 
              method='POST' 
              encType='multipart/form-data'
              className='w-[90%] m-auto'
        >

            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Full Name</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300 outline-none focus:scale-105 ease-in-out duration-100' 
                           type="text" 
                           name='Name' 
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300 outline-none focus:scale-105 ease-in-out duration-100' 
                           type="number" 
                           min='1' 
                           name='Phone' 
                    />
                </div>
            </div>

            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 outline-none focus:scale-105 ease-in-out duration-100' 
                       type="email" 
                       name='Email'
                />
            </div>

            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 outline-none focus:scale-105 ease-in-out duration-100' 
                       type="text" 
                       name='Subject'
                />
            </div>

            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300 resize-none outline-none focus:scale-105 ease-in-out duration-100' 
                          name="Message" 
                          cols="30" 
                          rows="10" 
                          placeholder='Write your message...'>
                </textarea>
            </div>

            <button className='bg-[#042985] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-[#052066] cursor-pointer'>Send Message</button>

        </form>

    </div>
  );
};

export default Contact;





// 1. stiliziramo roditelj div element
// 2. dodajemo form element i atribut action
// 3. stiliziramo form element
// 4. dodajemo i stiliziramo HTML elemente unutar form elementa
