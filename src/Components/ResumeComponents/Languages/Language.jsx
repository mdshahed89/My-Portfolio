import React from 'react'

function Language({icon, name}) {
  return (
    <div className=' bg-[#EDEDED]/80 px-[5%] sm:pt-[5%] pt-[3%] sm:pb-[5%] pb-[7%] border rounded-md relative '>
        <div className=' text-5xl sm:text-7xl '>
            {icon}
        </div>
        <h3 className=' text-end h-full w-full top-0 left-0 font-semibold flex items-end justify-center absolute text-[#0E46A3] text-[1.2rem] sm:text-[1.5rem] '>{name}</h3>
    </div>
  )
}

export default Language