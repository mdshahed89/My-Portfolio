import React from 'react'

import ProgressBar from './ProgressBar';


function Skill({title, icon, progress}) {
  return (
    <div className='  '>
        <div className=' flex gap-4 items-center '>
            <div className=' p-[4%] rounded-lg bg-[#EDEDED]/50 border text-[2rem] sm:text-[2.5rem] '>
                {icon}
            </div>
            <div className='w-full flex flex-col justify-center '>
                <h3 className=' text-[1.4rem] '>{title}</h3>
                <div className=' flex items-center gap-2 '>
                    <ProgressBar progress={progress}/>
                    <h3 className=' text-[1.3rem] '>{progress}%</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill