import React from 'react';
import bgImage from '../assets/bgImage.jpg';
import { Link } from 'react-router-dom';
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

function Hero() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover ' src={bgImage} alt="background" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1
              className='text-eerieBlack font-poppins uppercase text-[40px] md:text-left text-center'>
              Hi, I'm
              <br />
              <span
                className=" 
                text-[#808080] md:text-[50px] text-[30px]  font-mova
                font-extrabold uppercase">
                Adeyera Asimolowo
              </span>
              <br />
            </h1>
            <h2 className='text-eerieBlack font-poppins uppercase md:text-[30px] text-[20px]'>A Frontend Developer</h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <Link to="https://www.twitter.com/lizzy_ashy" target='_blank' rel='noopener noreferrer'>
                <FaTwitter  className='cursor-pointer ' size={20}/>
              </Link>
              <Link to="https://www.linkedin.com/in/adeyera-asimolowo-3474931b1/" target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className='cursor-pointer ' size={20} />
              </Link>
              <Link to="https://github.com/Adeyera16" target='_blank' rel='noopener noreferrer'>
                <FaGithub className='cursor-pointer ' size={20} />
              </Link>
              <Link to="https://www.instagram.com/lizzy_ashy" target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='cursor-pointer ' size={20} />
              </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero