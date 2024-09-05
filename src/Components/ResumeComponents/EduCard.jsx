import React from 'react'

function EduCard({clg, time, details}) {
  return (
    <div className=" hover:bg-[#EDEDED]/80 p-[3%] border rounded-lg ">
      <div className=" flex mb-5 ">
        <h3 className=" border border-[#0E46A3] rounded px-3 ">{time}</h3>
      </div>

      <div className=" flex items-center justify-between ">
        <h3 className=" text-[1.5rem] font-semibold ">{clg}</h3>
        {/* <img src={Client1} alt="" className=" h-[3rem] object-cover " /> */}
      </div>
      <h4 className=" text-base text-gray-400 ">Chittagong</h4>
      <div className=" text-xl my-5 ">
        <p className=' line-clamp-3 '>
          {details}
        </p>
      </div>
      <div>
        <button className=" text-xl font-semibold hover:text-[#0E46A3] ">Certificate</button>
      </div>
    </div>
  )
}

export default EduCard