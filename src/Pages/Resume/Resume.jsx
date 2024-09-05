import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import WorkExperienceCard from "../../Components/ResumeComponents/WorkExperienceCard";
import EduCard from "../../Components/ResumeComponents/EduCard";
import Languages from "../../Components/ResumeComponents/Languages/Languages";
import Tools from "../../Components/ResumeComponents/Tools/Tools.jsx";
import GenSkills from "../../Components/ResumeComponents/GenSkills/GenSkills.jsx";
import workImg2 from "../../assets/abmlogo.png"
import WorkImg1 from "../../assets/freelancerIcon.png"


function Resume() {
  return (
    <section id="resume">
      <h3 className=" py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">R</span>esume
      </h3>

      <div className=" flex sm:flex-row flex-col ">
        <div className=" flex-1 pt-[3%] px-[3%] border-r ">
          <div className=" flex items-center gap-2 ">
            <MdOutlineWorkspacePremium className=" text-[2rem] text-[#0E46A3] " />
            <h3 className=" text-[1.5rem] font-semibold ">Experience</h3>
          </div>

          <div className=" mt-[2rem] flex flex-col gap-4 ">
            <WorkExperienceCard details="Developed and maintained web applications using MERN. Collaborated with clients to deliver customized solutions, ensuring high performance and scalability. Enhanced user experience through responsive design and innovative features." img={WorkImg1} time="2022 - present" name="Freelancing" title="Full Stack Developer" />
            <WorkExperienceCard details="Contributed to building dynamic web applications MERN. Assisted in backend development with Node.js and Express. Participated in code reviews, debugging, and testing, ensuring efficient and robust software solutions." img={workImg2} time="2023 - present" name="ABM Global LTD." title="Junior Full Stack Developer" />
            {/* <WorkExperienceCard /> */}
          </div>

        </div>
        <div className=" flex-1 pt-[3%] px-[3%] ">
          <div className=" flex items-center gap-2 ">
            <MdCastForEducation className=" text-[2rem] text-[#0E46A3] " />
            <h3 className=" text-[1.5rem] font-semibold ">Education</h3>
          </div>

          <div className=" mt-[2rem] flex flex-col gap-4 " >
            <EduCard time="2022 - Present" clg="International Islamic University Chittagong" details="Currently pursuing a Bachelor of Science in Computer Science and Engineering (CSE) at International Islamic University Chittagong (IIUC). Developing expertise in software development, algorithms, and system design." />
            <EduCard time="2018 - 2020" clg="Professor Kamal Uddin Chowdhury College" details="Completed Higher Secondary Certificate (HSC) with a focus on Science. Gained foundational knowledge in mathematics, physics, and computer science. Graduated with strong academic performance." />
            {/* <EduCard time="2014 - 2018" clg="West Mayani Ideal High School" /> */}
          </div>

        </div>
      </div>
      <h3 className=" py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">P</span>rogramming
        <span className=" text-[#0E46A3] "> L</span>anguages
      </h3>
      <div className=" p-[3%] ">
        <Languages />
      </div>
      <h3 className=" py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">T</span>ools
        <span className=" text-[#0E46A3] "> S</span>tack
      </h3>
      <div className=" p-[3%] ">
        <Tools />
      </div>
      <h3 className=" py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">G</span>eneral
        <span className=" text-[#0E46A3] "> S</span>kills
      </h3>
      <div className=" px-[3%] pb-[3%] ">
        <GenSkills />
      </div>
    </section>
  );
}

export default Resume;
