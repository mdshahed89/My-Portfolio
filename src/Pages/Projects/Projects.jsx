import React from 'react'
import Works from '../../Components/ProjectComponents/Works'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section id='projects' className=' w-full '>
      <div className=" px-[1rem] py-[2rem] border-b border-[#e0e0e0] flex items-center justify-between ">
      <h3 className="   text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">M</span>y
        <span className=" text-[#0E46A3] "> W</span>orks
      </h3>
      <div className=" text-[1.2rem] flex items-center gap-4 ">
        <Link className=" hover:text-[#0E46A3] font-medium ">All</Link>
        <Link className=" hover:text-[#0E46A3] font-medium ">Code</Link>
        <Link className=" hover:text-[#0E46A3] font-medium ">Design</Link>
      </div>
      </div>
      <div className=' p-[3%] '>
        <Works />
      </div>
    </section>
  )
}

export default Projects