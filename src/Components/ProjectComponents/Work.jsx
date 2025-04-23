import React from 'react'
import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";


function Work({img, title, link}) {
  return (
    <div className=' group bg-[#EDEDED]/50 rounded-lg transition-all duration-300 ease-in-out '>
        <div className=' group-hover:border-[#a8bbda] border rounded-lg p-3 '>
            <img src={img} alt="" className=' h-auto max-h-[25rem] w-full object-cover object-top rounded-lg ' />
        </div>
        <div className=' px-3 py-[3%] flex justify-between items-center '>
            <div className=' flex flex-col gap-2 '>
                <div className='  flex '>
                    <h4 className=' text-[1.2rem] font-semibold bg-[#0E46A3] rounded-sm px-5 text-[#ffffff] '>Website</h4>
                </div>
                <div className=' text-[1.4rem] font-semibold line-clamp-1 '>{title}</div>
            </div>
            <div>
                <Link to={link} target='_blank' >
                    <GoArrowUpRight className=' group-hover:text-[#0E46A3] text-[3.5rem] font-semibold p-2 border-2 group-hover:border-[#0E46A3]  border-[#9b9b9b] rounded-lg ' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Work