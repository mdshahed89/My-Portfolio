import React, { useEffect, useState } from 'react'
import { LuUserCircle } from "react-icons/lu";
import { MdOutlineListAlt } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { RiBloggerLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';



function Header() {

    const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  console.log(active);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='bg-[#e5ecf3]/50 rounded-full px-4 flex flex-col gap-10 text-center py-5  '>
        <Link to={"/"} className=' text-[1.5rem] font-semibold text-center '>
            <span>SHD</span>
        </Link>
        <nav>
            <div className=' flex flex-col gap-8 '>
                <Link onClick={() => scrollToSection('about')}  to={"/"} className={` ${active==='/'?"text-[#0E46A3]":null} hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}>
                    <LuUserCircle />
                    <span>About</span>
                </Link>
                <Link onClick={() => scrollToSection('resume')} to={"/resume"} className={` ${active==="/resume" ? "text-[#0E46A3]" : null} hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}>
                    <MdOutlineListAlt />
                    <span>Resume</span>
                </Link>
                <Link onClick={() => scrollToSection('projects')}  to={"/projects"} className={` ${active==="/projects" ? "text-[#0E46A3]" : null} hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}>
                    <GoProject />
                    <span>Projects</span>
                </Link>
                <Link onClick={() => scrollToSection('articles')}  to={"/articles"} className={` ${active==="/articles" ? "text-[#0E46A3]" : null} hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}>
                    <RiBloggerLine />
                    <span>Articles</span>
                </Link>
                <Link onClick={() => scrollToSection('contact')}  to={"/contact"} className={` ${active==="/contact" ? "text-[#0E46A3]" : null} hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}>
                    <GrContact />
                    <span>Contact</span>
                </Link>
            </div>
        </nav>
        <div className=' flex items-center justify-center cursor-pointer  '>
            <MdOutlineDarkMode className=' text-[1.6rem] ' />
        </div>
    </header>
  )
}

export default Header