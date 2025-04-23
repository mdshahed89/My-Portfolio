import React from "react";
import Client1 from "../../assets/Client1.png"
import Client2 from "../../assets/Client2.png"
import abmlogo from "../../assets/abmlogo.png"
import Client3 from "../../assets/Client3.png"
import Client4 from "../../assets/Client4.png"
import Client5 from "../../assets/Client5.png"
import Client6 from "../../assets/Client6.png"
import Marquee from "react-fast-marquee";

function Clients() {
  return (
    <div>
      <h3 className=" mt-10 py-[2rem] border-b border-[#e0e0e0] pl-[1rem] text-[1.5rem] font-semibold ">
        <span className=" text-[#0E46A3] ">M</span>y{" "}
        <span className=" text-[#0E46A3] ">C</span>lients
      </h3>

        <div>
            <Marquee autoFill={true} className=" bg-[#d7e1ec] flex py-3 ">
              <div>
                <img src={Client1} className=" w-[10rem] object-cover mx-8  " alt="" />
              </div>
              <div>
                <img src={abmlogo} className=" w-[8rem] object-cover mx-8  " alt="" />
              </div>
              <div>
                <img src={Client3} className=" w-[10rem] object-cover mx-8  " alt="" />
              </div>
              <div>
                <img src={Client4} className=" w-[10rem] object-cover mx-8  " alt="" />
              </div>
              <div>
                <img src={Client5} className=" w-[10rem] object-cover mx-8  " alt="" />
              </div>
              <div>
                <img src={Client6} className=" w-[10rem] object-cover mx-8  " alt="" />
              </div>
            </Marquee>
        </div>

    </div>
  );
}

export default Clients;
