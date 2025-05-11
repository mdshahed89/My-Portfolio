import React, { useEffect, useState } from "react";
import { LuUserCircle } from "react-icons/lu";
import { MdOutlineListAlt } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { RiBloggerLine, RiProfileLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { HiMiniBars2 } from "react-icons/hi2";

function Header() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  //   console.log(active);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#e5ecf3]/50 rounded-full px-4 flex flex-col gap-10 text-center py-5  ">
      <Link to={"/"} className=" text-[1.5rem] font-semibold text-center ">
        <span className=" italic ">SHD</span>
      </Link>
      <nav>
        <div className=" flex flex-col gap-8 ">
          <Link
            onClick={() => scrollToSection("about")}
            to={"/"}
            className={` ${
              active === "/" ? "text-[#0E46A3]" : null
            } hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}
          >
            <LuUserCircle />
            <span>About</span>
          </Link>
          <Link
            onClick={() => scrollToSection("resume")}
            to={"/resume"}
            className={` ${
              active === "/resume" ? "text-[#0E46A3]" : null
            } hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}
          >
            <MdOutlineListAlt />
            <span>Resume</span>
          </Link>
          <Link
            onClick={() => scrollToSection("projects")}
            to={"/projects"}
            className={` ${
              active === "/projects" ? "text-[#0E46A3]" : null
            } hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}
          >
            <GoProject />
            <span>Projects</span>
          </Link>
          <Link
            onClick={() => scrollToSection("articles")}
            to={"/articles"}
            className={` ${
              active === "/articles" ? "text-[#0E46A3]" : null
            } hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}
          >
            <RiBloggerLine />
            <span>Articles</span>
          </Link>
          <Link
            onClick={() => scrollToSection("contact")}
            to={"/contact"}
            className={` ${
              active === "/contact" ? "text-[#0E46A3]" : null
            } hover:text-[#0E46A3] flex flex-col justify-center items-center gap-1 text-[1.3rem] `}
          >
            <GrContact />
            <span>Contact</span>
          </Link>
        </div>
      </nav>
      <div className=" flex items-center justify-center cursor-pointer  ">
        <MdOutlineDarkMode className=" text-[1.6rem] " />
      </div>
    </header>
  );
}

export default Header;

export const ResponsiveHeader = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [activeHash, setActiveHash] = useState(location.hash.replace("#", ""));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveHash(location.hash.replace("#", ""));
  }, [location.pathname, location.hash]);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(activeHash, active);
  

  return (
    <div>
      <header
        className={` ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out  w-[30rem] top-0 left-0 z-[2000] fixed bg-[#fff] h-[100vh] px-6 flex flex-col justify-between gap-10 py-[2rem] `}
      >
        <div>
          <div className=" flex items-center justify-between ">
            <Link to={"/#profile"} className=" text-[2rem] font-semibold ">
              <span className=" italic ">SHD</span>
            </Link>
            <div
              onClick={() => {
                setIsOpen(false)
              }}
              className=" p-3 rounded-full shadow-inner text-[1.8rem] "
            >
              <RxCross1 />
            </div>
          </div>
          <nav className=" mt-[5rem] ">
            <div className=" flex flex-col gap-8 ">
              <Link
                onClick={() => {
                    scrollToSection("profile")
                    setIsOpen(false)
                }}
                to={"/#profile"}
                className={` ${
                  active === "/" && activeHash === "profile" ? "text-[#0E46A3]" : null
                } hover:text-[#0E46A3] flex items-center gap-3 text-[1.6rem] `}
              >
                <RiProfileLine className=" mt-1 " />
                <span>Profile</span>
              </Link>
              <Link
                onClick={() => {
                    scrollToSection("about")
                    setIsOpen(false)
                }}
                to={"/#about"}
                className={` ${
                  active === "/" && activeHash === "about" ? "text-[#0E46A3]" : null
                } hover:text-[#0E46A3] flex items-center gap-3 text-[1.6rem] `}
              >
                <LuUserCircle className=" mt-1 " />
                <span>About</span>
              </Link>
              <Link
                onClick={() => {
                    scrollToSection("resume")
                    setIsOpen(false)
                }}
                to={"/resume"}
                className={` ${
                  active === "/resume" ? "text-[#0E46A3]" : null
                } hover:text-[#0E46A3] flex items-center gap-3 text-[1.6rem] `}
              >
                <MdOutlineListAlt className=" mt-1 " />
                <span>Resume</span>
              </Link>
              <Link
                onClick={() => {
                    scrollToSection("projects")
                    setIsOpen(false)
                }}
                to={"/projects"}
                className={` ${
                  active === "/projects" ? "text-[#0E46A3]" : null
                } hover:text-[#0E46A3] flex items-center gap-3 text-[1.6rem] `}
              >
                <GoProject className=" mt-1 " />
                <span>Projects</span>
              </Link>
              <Link
                onClick={() => {
                    scrollToSection("articles")
                    setIsOpen(false)
                }}
                to={"/articles"}
                className={` ${
                  active === "/articles" ? "text-[#0E46A3]" : null
                } hover:text-[#0E46A3] flex items-center gap-3 text-[1.6rem] `}
              >
                <RiBloggerLine className=" mt-1 " />
                <span>Articles</span>
              </Link>
              <Link
                onClick={() => {
                    scrollToSection("contact")
                    setIsOpen(false)
                }}
                to={"/contact"}
                className={` ${
                  active === "/contact" ? "text-[#0E46A3]" : null
                } hover:text-[#0E46A3] flex items-center gap-3 text-[1.6rem] `}
              >
                <GrContact className=" mt-1 " />
                <span>Contact</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className=" flex cursor-pointer  ">
          <MdOutlineDarkMode className=" text-[2rem] " />
        </div>
      </header>
      <div className=" fixed w-full top-0 left-0 bg-[#fff] flex items-center justify-between px-6 h-[6rem] z-[1500] ">
        <div className=" text-[2rem] italic ">SHD</div>
        <div onClick={() => setIsOpen(true)}>
          <HiMiniBars2 className=" text-[2rem] " />
        </div>
      </div>
    </div>
  );
};
