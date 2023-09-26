import React from 'react';
import project from '../utils/Project';
import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Projects() {
  return (
     <div id='projects' className='w-full py-16 '>
         <div className=' text-center'>
         <h1 className='text-[40px] font-extrabold  text-black'>Projects</h1>
          <p className=' py-8 px-5 text-gray-500 max-w-[800px] mx-auto '>These projects serve as tangible examples of my skills and expertise, displaying real-world examples of my work. They include brief descriptions as well as links to code repositories and live demos. Through these projects, I demonstrate my ability to deal with complex problems, adapt to new technologies, and effectively manage project development.</p>
         </div>
         <div className='grid md:grid-cols-3 gap-12 mx-[5rem] mt-[3rem] text-gray-500'>
            {project.map((item) => (
              <div key={item.id} className='h-auto w-full group bg-white shadow-xl shadow-gray-300 p-5 '>
                <img src={item.image} alt='' className='rounded-lg' />
                <div className='my-4'>
                <h3 className='text-xl gradient__text font-bold tracking-wider my-4'>{item.title}</h3>
                  <p className='my-4'>{item.description}</p>
                  <div className='flex justify-between'>
                    <Link to={item.demoLink} target='_blank' rel='noopener noreferrer' className='mt-2 p-2 gradient__bg  text-white rounded-md '>
                    Live Demo
                    </Link>
                    <Link to={item.githubLink} target='_blank' rel='noopener noreferrer' >
                      <FaGithub className='cursor-pointer text-black mt-3' size={30} />
                      </Link>
                  </div>
                </div>
              </div>
        ))}
      </div>
      </div>
  )
}

export default Projects




