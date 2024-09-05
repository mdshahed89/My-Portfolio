import React from "react";

function ContactForm() {
  return (
    <div className=" flex flex-col gap-[1rem] ">
      <div className=" w-full grid grid-cols-2 gap-[3%]  ">
        <input type="text" placeholder="Full Name" className=" outline-none px-3 py-2 bg-[#EDEDED]/80 border border-b-4 border-[#536074] rounded-md ]  text-[1.3rem] " />
        <input type="text" placeholder="Email" className=" outline-none px-3 py-2 bg-[#EDEDED]/80 border border-b-4 border-[#536074] rounded-md   text-[1.3rem] " />
      </div>
      <div className=" w-full ">
      <input type="text" placeholder="message" className=" outline-none px-3 pt-2 pb-20 bg-[#EDEDED]/80 border border-b-4 border-[#536074] rounded-md   text-[1.3rem] w-full " />
      </div>
      <div className=" flex justify-end ">
        <button className=" text-[1.4rem] bg-[#0E46A3] rounded-md text-[#fff] px-8 py-1 ">Send Message</button>
      </div>
    </div>
  );
}

export default ContactForm;
