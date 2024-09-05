import React from "react";

import { GrLike } from "react-icons/gr";


function Blog({time, title, details, react, img}) {
  return (
    <div className=" border rounded-md relative bg-[#EDEDED] ">
      <div className=" -z-10 ">
        <img
          src={img}
          alt=""
          className=" h-[20rem] object-cover w-full -z-10 "
        />
      </div>
      <div className=" relative bg-[#ffffff] rounded-lg mx-[3%] mt-[-10%] pl-[3%] pr-[1%] py-[3%] z-[10000000000000] ">
        <div className=" flex items-center ">
          <h3 className=" text-[1.1rem] px-3 border rounded-md border-[#0E46A3]  ">{time}</h3>
        </div>
        <div>
          <h2 className=" text-[1.5rem] font-semibold py-2 line-clamp-1 ">{title}</h2>
          <h4 className=" text-[1.2rem] line-clamp-3 ">
          {details}
          </h4>
        </div>
      </div>
      <div className=" flex items-center justify-between px-[6%] py-[4%] ">
        <div className=" flex items-center gap-3   text-[1.3rem]  ">
            <GrLike className=" text-[#0E46A3] cursor-pointer "/>
            <h3>{react}</h3>
        </div>
        <div>
            <button className=" text-[1.3rem] hover:underline transition-all duration-300 ease-in-out hover:text-[#0E46A3] ">Read More...</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
