import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
// import Reviewer1 from "../../assets/Reviewer1.jpg";
import Reviewer2 from "../../assets/Reviewer2.jpg";
import Reviewer3 from "../../assets/Reviewer3.jpg";
import Reviewer4 from "../../assets/Reviewer4.jpg";
import Reviewer5 from "../../assets/Review5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h3 className=" mt-10 py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] -z-20 font-semibold ">
        <span className=" text-[#0E46A3] ">T</span>estimonials
      </h3>
      <div>
        <Slider {...settings} className=" mx-[3%] mt-[3%] ">
          <div className=" bg-[#E1E1E1] p-8 overflow-hidden flex flex-col gap-5 rounded-xl relative ">
            <div className=" absolute top-[0%] right-0 z-50 ">
              <img
                src={Reviewer5}
                className=" w-[5rem] h-[5rem] rounded-full object-cover z-50 "
                alt=""
              />
            </div>
            <TiArrowUnsorted className=" rotate-90 text-[#0E46A3] text-[2rem] " />
            <div className=" flex flex-col gap-3  ">
              <p className=" text-[1.2rem] line-clamp-4 pt-[2%] ">
              Shahed's exceptional full stack development skills transformed our project. His dedication, efficiency, and innovative solutions exceeded our expectations. Highly recommended!
              </p>
              <div className=" flex justify-between ">
                <div>
                  <h3 className=" text-[1.2rem] font-semibold ">Md Habib</h3>
                  <h4 className=" text-[#505050] line-clamp-1 ">Chief Technology Officer, TechNova</h4>
                </div>
                <div className=" flex items-center gap-1 text-[#0E46A3] ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#E1E1E1] p-8 overflow-hidden flex flex-col gap-5 rounded-xl relative ">
            <div className=" absolute top-[0%] right-0 z-50 ">
              <img
                src={Reviewer2}
                className=" w-[5rem] h-[5rem] rounded-full object-cover z-50 "
                alt=""
              />
            </div>
            <TiArrowUnsorted className=" rotate-90 text-[#0E46A3] text-[2rem] " />
            <div className=" flex flex-col gap-3  ">
              <p className=" text-[1.2rem] line-clamp-4 pt-[2%] ">
              Working with Shahed was a game-changer. His expertise in both frontend and backend development brought our vision to life seamlessly and ahead of schedule.
              </p>
              <div className=" flex justify-between ">
                <div>
                  <h3 className=" text-[1.2rem] font-semibold ">Sophia Davis</h3>
                  <h4 className=" text-[#505050]  line-clamp-1">Creative Director, BrightNet</h4>
                </div>
                <div className=" flex items-center gap-1 text-[#0E46A3] ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#E1E1E1] p-8 overflow-hidden flex flex-col gap-5 rounded-xl relative ">
            <div className=" absolute top-[0%] right-0 z-50 ">
              <img
                src={Reviewer3}
                className=" w-[5rem] h-[5rem] rounded-full object-cover z-50 "
                alt=""
              />
            </div>
            <TiArrowUnsorted className=" rotate-90 text-[#0E46A3] text-[2rem] " />
            <div className=" flex flex-col gap-3  ">
              <p className=" text-[1.2rem] line-clamp-4 pt-[2%] ">
              Shahed's professionalism and technical prowess are unparalleled. His ability to troubleshoot and optimize our platform was instrumental in our project's success. Exceptional developer!
              </p>
              <div className=" flex justify-between ">
                <div>
                  <h3 className=" text-[1.2rem] font-semibold ">Liam Brown</h3>
                  <h4 className=" text-[#505050]  line-clamp-1">Lead Software Engineer, Innovix</h4>
                </div>
                <div className=" flex items-center gap-1 text-[#0E46A3] ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#E1E1E1] p-8 flex flex-col gap-5 rounded-xl relative ">
            <div className=" absolute top-0 right-0 ">
              <img
                src={Reviewer4}
                className=" w-[5rem] h-[5rem] rounded-full object-cover "
                alt=""
              />
            </div>
            <TiArrowUnsorted className=" rotate-90 text-[#0E46A3] text-[2rem] " />
            <div className=" flex flex-col gap-3 ">
              <p className=" text-[1.2rem] line-clamp-4 pt-[2%] ">
              Shahed's comprehensive knowledge and proactive approach significantly improved our application's performance. His collaborative spirit and problem-solving skills make him an invaluable asset to any team.
              </p>
              <div>
                <div className=" flex justify-between ">
                  <div className="  ">
                    <h3 className=" text-[1.2rem] font-semibold ">Emma Johnson</h3>
                    <h4 className=" text-[#505050] line-clamp-1 ">Senior Product Manager, NextGen</h4>
                  </div>
                  <div className=" flex items-center gap-1 text-[#0E46A3] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
