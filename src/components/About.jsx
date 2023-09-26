import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div id='about' className="text-gray-500 bg-black p-[2rem] md:pl-[5rem]">
        <div>
        <p className='uppercase text-[18px]'>Introduction</p>
        <h2 className='uppercase font-extrabold text-white text-[30px]'>Overview.</h2>
        </div>

        <div
        className="mt-4 text-[18px] max-w-3xl leading-[30px]">
        I am a Frontend Developer passionate about building web applications that are not only functional but also capable of solving intricate problems and enhancing user experiences. My approach is centered around putting the users needs at the forefront, ensuring that the web solutions I create are both delightful and efficient.
        </ div>
        <div className='mt-5'>
          <Link to="https://drive.google.com/file/d/1lfshbSl_TTRza0P_gUBhRzCU7yY94DoL/view?usp=drivesdk" target='_blank' rel='noopener noreferrer' 
          className='gradient__bg text-white p-2 px-4 rounded-md'>
                Resume
          </Link>
        </div>
    </div>
    )
}

export default About