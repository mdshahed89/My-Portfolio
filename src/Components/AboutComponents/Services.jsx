import React from "react";
import { SiWebmoney } from "react-icons/si";
import { GrApps } from "react-icons/gr";
import { IoLogoDesignernews } from "react-icons/io5";
import { SiBlockchaindotcom } from "react-icons/si";

function Services() {
  return (
    <div>
      <h3 className=" mt-10 py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">M</span>y{" "}
        <span className=" text-[#0E46A3] ">S</span>ervices
      </h3>

      <div className=" flex sm:flex-row flex-col  px-[3%]">
        <div className=" pt-[3%] pr-[3%] border-r flex flex-col gap-7  ">
          <div className=" bg-[#E6EAEE]/70 p-[6%] flex  flex-col gap-3 rounded-lg border border-[#d1d1d1] ">
            <div className="  ">
              <SiWebmoney className=" text-[3.5rem] text-[#0E46A3] rounded-full bg-[#0E46A3]/10 p-3 " />
            </div>
            <h3 className=" text-[1.4rem] font-semibold ">
              <span className=" text-[#0E46A3] ">W</span>eb{" "}
              <span className=" text-[#0E46A3] ">D</span>evelopment
            </h3>
            <p className=" text-[1.1rem] line-clamp-3 ">
            Create dynamic, responsive websites that enhance user experience and ensure optimal performance across all devices.
            </p>
          </div>
          <div className=" bg-[#E6EAEE]/70 p-[6%] flex  flex-col gap-3 rounded-lg border border-[#d1d1d1]">
            <div className="  ">
              <IoLogoDesignernews className=" text-[3.5rem] text-[#0E46A3] rounded-full bg-[#0E46A3]/10 p-3 " />
            </div>
            <h3 className=" text-[1.4rem] font-semibold ">
              <span className=" text-[#0E46A3] ">U</span>I / UX{" "}
              <span className=" text-[#0E46A3] ">D</span>esign
            </h3>
            <p className=" text-[1.1rem] line-clamp-3 ">
            Design visually appealing, user-centric interfaces that enhance engagement and usability through thorough research and testing.
            </p>
          </div>
        </div>
        <div className=" pt-[3%] pl-[3%] flex flex-col gap-7 ">
          <div className=" bg-[#E6EAEE]/70 p-[6%] flex  flex-col gap-3 rounded-lg border border-[#d1d1d1]">
            <div className="  ">
              <GrApps className=" text-[3.5rem] text-[#0E46A3] rounded-full bg-[#0E46A3]/10 p-3 " />
            </div>
            <h3 className=" text-[1.4rem] font-semibold ">
              <span className=" text-[#0E46A3] ">A</span>pp{" "}
              <span className=" text-[#0E46A3] ">D</span>evelopment
            </h3>
            <p className=" text-[1.1rem] line-clamp-3 ">
            Develop intuitive, scalable mobile apps for iOS and Android, offering end-to-end solutions from concept to deployment.
            </p>
          </div>
          <div className=" bg-[#E6EAEE]/70 p-[6%] flex  flex-col gap-3 rounded-lg border border-[#d1d1d1]">
            <div className="  ">
              <SiBlockchaindotcom className=" text-[3.5rem] text-[#0E46A3] rounded-full bg-[#0E46A3]/10 p-3 " />
            </div>
            <h3 className=" text-[1.4rem] font-semibold ">
              <span className=" text-[#0E46A3] ">S</span>EO{" "}
              <span className=" text-[#0E46A3] ">M</span>arketting
            </h3>
            <p className=" text-[1.1rem] line-clamp-3 ">
            Boost online visibility with advanced SEO strategies, driving organic traffic and improving search engine rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
