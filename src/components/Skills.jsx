import React from 'react';
import skillsData from '../utils/skillsData';

function Skills() {
  return (
    <div id='Skill' className='bg-black md:px-[5rem] p-4'>
        <div className=''>
            <p className='text-gray-500 text-[20px]'>My skills</p>
            <h2 className='text-white text-[30px] font-extrabold'>Technologies.</h2>
        </div>
        <div className='grid md:grid-cols-6 grid-cols-3 mt-[3rem] text-white'>
            {
                skillsData.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <img src={item.image}  alt='image' className={'w-[5rem] h-[5rem] '} />
                        <p className='mt-2 mb-4'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills