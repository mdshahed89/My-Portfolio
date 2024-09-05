import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Services from "../../Components/AboutComponents/Services";
import Pricing from "../../Components/AboutComponents/Pricing";
import Clients from "../../Components/Clients/Clients";
import Testimonials from "../../Components/AboutComponents/Testimonials";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";


function About() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ShahedResume.pdf'; // The path to the resume file in the public folder
    link.download = 'resume.pdf'; // The name the file should be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="about">
      <div>
        <div className=" py-[2rem] px-[1rem] border-b border-[#e0e0e0] flex items-center justify-between ">
          <h3 className="   text-[1.5rem] font-semibold ">
            <span className=" text-[#0E46A3] ">A</span>bout{" "}
            <span className=" text-[#0E46A3] ">M</span>e
          </h3>
          <Link onClick={handleDownload} className=" flex items-center gap-2 bg-[#0E46A3] px-5 text-[#fff] rounded-md ">
            <h3 className=" text-[1.3rem] ">Resume</h3>
            <FaDownload className=" text-[1.1rem] " />
          </Link>
        </div>
        <div className=" flex sm:flex-row flex-col sm:gap-0 gap-5 px-[3%]  text-[1.4rem] ">
          <div className=" flex-1 border-r  pt-[3%] pr-[3%]">
            I'm Md Shahed, a dedicated MERN stack developer with a passion for
            problem-solving and entrepreneurship. Specializing in full-stack
            development, I provide comprehensive services to businesses.
            Committed to delivering innovative solutions, I thrive on tackling
            challenges and creating impactful digital experiences.
          </div>
          <div className=" flex-1 flex flex-col gap-8 pt-[3%] sm:pl-[3%] ">
            <div className=" flex justify-between ">
              <h3 className="">
                <span className=" bg-[#0E46A3]  rounded-md text-[#fff] px-3 py-1 ">
                  Location:
                </span>
              </h3>
              <div>Chittagong, BD</div>
            </div>
            <div className=" flex justify-between ">
              <h3 className=" ">
                <span className=" bg-[#0E46A3]  rounded-md text-[#fff] px-3 py-1 ">
                  Languages:
                </span>
              </h3>
              <div>Bangla, English</div>
            </div>
            <div className=" flex justify-between ">
              <h3 className=" ">
                <span className=" bg-[#0E46A3]  rounded-md text-[#fff] px-3 py-1 ">
                  Skill:
                </span>
              </h3>
              <div className=" grid grid-cols-4 gap-4 text-[#0E46A3] ">
                <FaReact className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <RiNextjsLine className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <FaNodeJs className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <SiMongodb className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <GrMysql className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <RiTailwindCssFill className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <SiExpress className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
                <SiRedux className=" p-2 rounded-md bg-[#0E46A3]/10 text-[2.5rem] " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Services />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Clients />
      </div>
      <div className=" lg:pb-0 pb-[5rem] ">
        <Testimonials />
      </div>
    </section>
  );
}

export default About;
