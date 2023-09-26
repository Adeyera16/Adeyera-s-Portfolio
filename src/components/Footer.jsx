import React from 'react'
import { Link } from 'react-router-dom';
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black p-[2rem] text-white flex flex-col justify-center text-center items-center'>
        <div className='flex mt-[1.5rem] ml-[2rem] mb-[0.5rem]'>
              <Link to="https://www.twitter.com/lizzy_ashy" target='_blank' rel='noopener noreferrer'>
                <FaTwitter  className='cursor-pointer  mr-[1rem]' size={15}/>
              </Link>
              <Link to="https://www.linkedin.com/in/adeyera-asimolowo-3474931b1/" target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className='cursor-pointer  mr-[1rem]' size={15} />
              </Link>
              <Link to="https://github.com/Adeyera16" target='_blank' rel='noopener noreferrer'>
                <FaGithub className='cursor-pointer  mr-[1rem]' size={15} />
              </Link>
              <Link to="https://www.instagram.com/lizzy_ashy" target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='cursor-pointer  mr-[1rem]' size={15} />
              </Link>
            </div>
            <p className='text-sm text-[#6B7280] '>&copy; 2023 Adeyera Asimolowo</p>
    </footer>
  )
}

export default Footer