import React from "react";
import Skill from "./Skill";
import { FaReact } from "react-icons/fa6";
import "./GenSkills.css"
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { SiCodeblocks } from "react-icons/si";
import { SiSublimetext } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { GiEclipse } from "react-icons/gi";




function Skills() {
  return (
    <div className="flex  ">
      <div className=" border-r flex-1 pr-[1%] ">
        <div className=" pb-[3%] mb-[6%] pt-[3%] border-b  ">
          <h3 className=" text-[1.5rem] font-semibold ">Coding</h3>
        </div>
        <div className=" flex flex-col gap-5 h-[30vh] sm:h-[50vh] pr-3 overflow-y-auto custom-scrollbar ">
        <Skill progress="85" title="ReactJs" icon={<FaReact />} />
        <Skill progress="60" title="NextJs" icon={<RiNextjsFill />} />
        <Skill progress="90" title="Tailwind" icon={<RiTailwindCssFill />} />
        {/* <Skill title="Saas" icon={<RiNextjsFill />} /> */}
        <Skill progress="80" title="NodeJs" icon={<FaNode />} />
        <Skill progress="80" title="ExpressJs" icon={<SiExpress />} />
        <Skill progress="80" title="MongoDb" icon={<DiMongodb />} />
        <Skill progress="70" title="Mysql" icon={<SiMysql />} />
        <Skill progress="85" title="Mongoose" icon={<SiMongoose />} />
        <Skill progress="70" title="Redux tool kit" icon={<SiRedux />} />
        </div>
      </div>
      <div className=" flex-1 pl-[2%] ">
      <div className=" pb-[3%] mb-[6%] pt-[3%] border-b  ">
          <h3 className=" text-[1.5rem] font-semibold ">Platforms</h3>
        </div>
        <div className=" flex flex-col gap-5 h-[30vh] sm:h-[50vh] pr-3 overflow-y-auto custom-scrollbar ">
        <Skill progress="90" title="Visual Studio" icon={<VscVscode />} />
        <Skill progress="90" title="Codeblocks" icon={<SiCodeblocks />} />
        <Skill progress="90" title="Sublime Text" icon={<SiSublimetext />} />
        <Skill progress="80" title="Inteliji" icon={<SiIntellijidea />} />
        <Skill progress="80" title="Netbeans" icon={<DiNetbeans />} />
        <Skill progress="90" title="Postman" icon={<SiPostman />} />
        <Skill progress="90" title="Git" icon={<FaGitAlt />} />
        <Skill progress="90" title="Github" icon={<FaGithub />} />
        <Skill progress="70" title="Slack" icon={<FaSlack />} />
        <Skill progress="60" title="Eclipse" icon={<GiEclipse />} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
