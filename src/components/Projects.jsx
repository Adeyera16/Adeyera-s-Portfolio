import React from 'react'
import ProjectsItem from './ProjectsItem';
import gpt3 from '../assets/gpt3.png';
import loanify from '../assets/loanify.png';
import starWars from '../assets/starWars.png';

function Projects() {
  return (
    <div id='projects' className='w-full py-16 bg-black'>
        <div className=' text-center'>
        <h1 className='text-[40px] font-extrabold  text-white'>Projects</h1>
        <p className=' py-8 text-gray-500 max-w-[800px] mx-auto '>These projects serve as tangible examples of my skills and expertise, displaying real-world examples of my work. They include brief descriptions as well as links to code repositories and live demos. Through these projects, I demonstrate my ability to deal with complex problems, adapt to new technologies, and effectively manage project development.</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-12 text-gray-500'>
        <ProjectsItem img={loanify} title='Loanify App'/>
        <ProjectsItem img={gpt3} title='Gpt3'/>
        <ProjectsItem img={starWars} title='Starwars'/>
        </div>
    </div>
  )
}

export default Projects