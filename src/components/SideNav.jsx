import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr';
import { Link } from 'react-scroll';


function SideNav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
    <div>
        <AiOutlineMenu
         onClick={handleNav}
         className='absolute top-4 right-4 z-[99] md:hidden gradient__text'/>
         {
             nav ? (
                     <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                         <Link activeClass='active' to='home' smooth={true} duration={500} className='w-[65%] flex justify-center items-center rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                             <AiOutlineHome size={20}/>
                             <span className='pl-4'>Home</span>
                         </Link>
                         <Link activeClass='active'to='about' smooth={true} duration={500} className='w-[65%] flex justify-center items-center rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                             <GrProjects size={20}/>
                             <span className='pl-4'>About</span>
                         </Link>
                         <Link activeClass='active' to='projects' smooth={true} duration={500} className='w-[65%] flex justify-center items-center rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                             <AiOutlineProject size={20}/>
                             <span className='pl-4'>Project</span>
                         </Link>
                         <Link activeClass='active' to='skills' smooth={true} duration={500} className='w-[65%] flex justify-center items-center rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                             <BsPerson size={20}/>
                             <span className='pl-4'>Skill</span>
                         </Link>
                         <Link activeClass='active' to='contact' smooth={true} duration={500} className='w-[65%] flex justify-center items-center rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                             <AiOutlineMail size={20}/>
                             <span className='pl-4'>Contact</span>
                         </Link>
                     </div>
             )
             : (
                 ''
             )
         }
         <div className='md:block hidden fixed top-[25%] z-10'>
             <div className='flex flex-col'>
                 <Link  to='home' smooth={true} duration={500} className='rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease duration-300'>
                     <AiOutlineHome />
                 </Link>
                 <Link  to='about' smooth={true} duration={500} className='rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease duration-300'>
                     <GrProjects />
                 </Link>
                 <Link to='projects' smooth={true} duration={500} className='rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease duration-300'>
                     <AiOutlineProject />
                 </Link>
                 <Link  to='skills' smooth={true} duration={500} className='rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease duration-300'>
                     <BsPerson />
                 </Link>
                 <Link  to='contact' smooth={true} duration={500} className='rounded-full shadow-lg gradient__bg text-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease duration-300'>
                     <AiOutlineMail />
                 </Link>
             </div>
         </div>
     </div>
   )
 }

 export default SideNav