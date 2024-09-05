import React from "react";
import Client1 from "../../assets/Client1.png";
// import abmlogo from "../../assets/abmlogo.png"

function WorkExperienceCard({time, name, title, img, details}) {
  return (
    <div className=" bg-[#EDEDED]/80 p-[3%] border rounded-lg ">
      <div className=" flex mb-5 ">
        <h3 className=" border border-[#0E46A3] rounded px-3 ">{time}</h3>
      </div>

      <div className=" flex items-center justify-between ">
        <h3 className=" text-[1.5rem] font-semibold ">{title}</h3>
        <img src={img} alt="" className=" h-[3rem] object-cover " />
      </div>
      <h4 className=" text-base text-gray-400 ">{name}</h4>
      <div className=" text-xl my-5 ">
        <p className=" line-clamp-3 ">
          {details}
        </p>
      </div>
      <div>
        <button className=" text-xl font-semibold hover:text-[#0E46A3] ">Learn More</button>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
