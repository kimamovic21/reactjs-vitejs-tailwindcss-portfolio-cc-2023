import React from 'react';
import WorkItem from './WorkItem';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiJavascript, SiTailwindcss} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';

const data = [
    {
        icon: <AiFillHtml5 size={50} style={{color:'#e34c26'}}/>,
        alt: "HTML 5",
        title: "What is HTML 5 ?",
        description: "HTML 5 is a markup language used for structuring and presenting content on the World Wide Web.",
    },
    {
        icon: <DiCss3 size={50} style={{color:'#264de4'}}/>,
        alt: "CSS 3",
        title: "What is CSS 3 ?",
        description: "CSS 3 is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. ",
    },
    {
        icon: <SiJavascript size={50} style={{color: '#f7df1e'}}/>,
        alt: "Javascript",
        title: "What is Javascript ?",
        description: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",
    },
    {
        icon: <FaReact  size={50} style={{color:'#61dbfb'}}/>,
        alt: "React JS",
        title: "What is React JS ?",
        description: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
        icon: <SiTailwindcss size={50} style={{color:'#61dbfb'}}/>,
        alt: "Tailwind CSS",
        title: "What is Tailwind CSS ?",
        description: "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
    },
];


const Work = () => {
  return (
    <div id='work' className='max-w-[800px] m-auto md:pl-20 p-4 py-16'>
        <h2 className='text-3xl  md:text-4xl font-bold text-center text-[#333] pb-10 tracking-wider'>Work</h2>
        {data.map((item, id) => (
            <WorkItem key={id} 
                      icon={item.icon} 
                      title={item.title} 
                      description={item.description}
            />
        ))}
    </div>
  );
};

export default Work;




// 1. dodajemo niz data
// 2. stiliziramo roditelj div elemente
// 3. dodajemo i stiliziramo HTML elemente
// 4. dodajemo javascript map metodu
// 5. importujemo react ikonice
// 6. unutar js map metode dodajemo WorkItem.jsx komponentu
