import React from 'react';
import ProjectItem from './ProjectItem';
import Dashboard from '../projects/dashboard.jpg';
import Travel from '../projects/travel.jpg';
import Weekaway from '../projects/weekaway.jpg';
import Food from '../projects/food.jpg';

const Projects = () => {
  return (
    <section id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

        <h2 className='text-4xl font-bold text-center text-[#333]'>Projects</h2>

        <p className='text-center py-8 text-xl'>Check some of my recent projects I have created</p>

        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={Dashboard} title='Dashboard'/>
            <ProjectItem img={Travel} title='Travel'/>
            <ProjectItem img={Weekaway} title='Weekaway'/>
            <ProjectItem img={Food} title='Food'/>
        </div>

    </section>
  );
};

export default Projects;




// 1. stiliziramo roditelj element
// 2. importujemo slike projekata
// 3. importujemo ProjectItem komponente
// 4. dodajemo i stiliziramo HTML elemente
