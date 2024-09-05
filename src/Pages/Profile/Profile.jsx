import React from "react";
import MyImage from "../../assets/MyImage.webp";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaWhatsapp   } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import TypeWriter from "../../Components/ProfileComponents/Typewritter";



function Profile() {
  return (
    <div className=" h-[60vh] md:h-[700px] lg:mt-0 mt-[3rem] lg:py-0  lg:h-full relative flex items-center justify-center ">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80%] h-[100%] md:h-[90%] md:mb-0 mb-[3rem] border rounded-md border-[#d1d1d1] flex flex-col justify-between ">

          <div className=" flex flex-col gap-5 ">
          <div className=" mt-[3%] lg:mt-[5%] ">
            <img src={MyImage} className=" w-[23rem] md:w-[27rem] lg:w-[90%] mx-auto object-cover px-3 " alt="" />
          </div>
          <div>
          <h3 className=" text-center text-[1.8rem] font-semibold ">Md Shahed</h3>
          <h4 className=" text-center text-[1.6rem] pb-3  ">
          <TypeWriter />
          </h4>
          </div>
          <div className=" flex justify-center gap-4 ">
            <Link to={"https://www.linkedin.com/in/shahed89/"} target="_blank" className=" p-4 border hover:bg-[#fff] border-[#d1d1d1] rounded-md cursor-pointer ">
                <FaLinkedinIn />
            </Link>
            <Link to={"https://github.com/mdshahed89"} target="_blank" className=" p-4 border hover:bg-[#fff] border-[#d1d1d1] rounded-md cursor-pointer ">
                <FaGithub />
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=61556005032478"} target="_blank"  className=" p-4 border hover:bg-[#fff] border-[#d1d1d1] rounded-md cursor-pointer ">
                <FaFacebookF />
            </Link>
            <Link to={"https://www.instagram.com/mdshahed827/"} target="_blank" className=" p-4 border hover:bg-[#fff] border-[#d1d1d1] rounded-md cursor-pointer ">
                <FaInstagram />
            </Link>
          </div>
          </div>

          <div className=" grid grid-cols-2 ">
            <div className=" border border-[#d1d1d1] hover:bg-[#fff] flex justify-center items-center py-4 text-[1.4rem] ">
              <Link to={"https://wa.me/+8801540362968"} target="_blank" className=" flex items-center gap-2 ">
                <FaWhatsapp /> <span>Message</span>
              </Link>
            </div>
            <div className=" border border-[#d1d1d1] hover:bg-[#fff] flex justify-center items-center py-4 text-[1.4rem] ">
              <Link to={"mailto:mdshahedpersonal@gmail.com"} target="_blank" className=" flex items-center gap-2 ">
                <IoMailOutline /> <span>Email</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
