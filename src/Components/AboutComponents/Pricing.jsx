import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <h3 className=" mt-10 py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">P</span>ricing{" "}
        <span className=" text-[#0E46A3] ">P</span>lan
      </h3>
      <div className=" flex sm:flex-row flex-col px-[3%] ">
        <div className=" flex-1 pt-[3%] sm:pr-[3%] border-r  relative">
          <div className=" absolute top-[8%] w-[94%] text-center z-50  ">
            <h3 className="  text-[1.5rem] font-semibold ">
              <span className=" bg-[#0E46A3] text-[#fff] px-5 py-1 rounded-full ">
                Personal Plan
              </span>
            </h3>
          </div>
          <div className=" bg-[#EDEDED]/70 priceShape rounded-md border border-[#d1d1d1] flex flex-col items-center gap-5  ">
            <div className=" mt-[20%] text-[1.8rem]  ">
              <span className=" text-[#0E46A3] ">10$</span>/ Hour
            </div>
            <div className=" h-[1px] bg-[#d1d1d1] w-full my-[1.5rem] "></div>
            <div className=" text-[1.3rem] flex flex-col gap-3 px-3 ">
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Affordable rate for small projects</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Access all essential features</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Transparent pricing, no hidden fees</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Customize to fit needs</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Dedicated support for success</p>
              </div>
            </div>
            <Link to={"https://wa.me/+8801540362968"} target="_blank" className=" text-center hover:bg-[#fff] text-[1.4rem] font-semibold py-3 border-t border-[#d1d1d1] w-full ">
              <button>Order Now</button>
            </Link>
          </div>
        </div>
        <div className=" flex-1 pt-[3%] sm:pl-[3%] relative">
          <div className=" absolute top-[8%] w-[94%] text-center z-50   ">
            <h3 className=" text-[1.5rem] font-semibold ">
              <span className=" bg-[#0E46A3] text-[#fff] px-5 py-1 rounded-full ">
                Team Plan
              </span>
            </h3>
          </div>
          <div className=" bg-[#EDEDED]/50 rounded-md priceShape border border-[#d1d1d1] flex flex-col items-center gap-5 ">
            <div className=" mt-[20%] text-[1.8rem]  ">
              <span className=" text-[#0E46A3] ">25$</span>/ Hour
            </div>

            <div className=" h-[1px] my-[1.5rem] bg-[#d1d1d1] w-full "></div>
            <div className=" text-[1.3rem] flex flex-col gap-3 px-3 ">
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Ideal for businesses, larger teams</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Advanced features and tools included</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Easily scale as needed</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Enhance productivity with collaboration</p>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" text-[#0E46A3] " />
                <p>Priority support for smooth projects</p>
              </div>
            </div>
            <Link to={"https://wa.me/+8801540362968"} target="_blank" className="hover:bg-[#fff] text-center text-[1.4rem] font-semibold py-3 border-t border-[#d1d1d1] w-full ">
              <button>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
