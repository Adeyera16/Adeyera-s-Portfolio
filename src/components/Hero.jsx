import React from 'react';
import bgImage from '../assets/bgImage.jpg';
import {BsChevronRight} from 'react-icons/bs';
import {Link} from 'react-scroll'


function Hero() {
  return (
    <div id='home'>
        <img className='w-full h-screen object-cover' src={bgImage} alt="background" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/70 '>
        <div className='max-w-[700px]  md:m-auto h-full w-full flex flex-col justify-center lg:items-start p-[2rem]'>
            <h1
              className='gradient__text font-poppins font-bold text-[40px]'>
              Hello!
            </h1>
            <h2 className='font-poppins font-semi-bold text-[30px]'>I'm Adeyera Asimolowo</h2>
            <p className=''>A frontend developer creating amazing user experiences through innovative technology. Let's collaborate!</p>
            <Link
            activeClass='active'
            spy={true}
            offset={-70}
            to='projects' smooth={true} duration={500}>
            <button className='gradient__bg flex justify-between text-white p-2 px-5 mt-[1rem] w-[8rem]'>
              Portfolio <span><BsChevronRight className='ml-2 mt-[0.4rem]' /></span>
            </button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero