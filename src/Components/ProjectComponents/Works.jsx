import React from "react";
import Work from "./Work";
import WorkImg1 from "../../assets/WorkImg1.webp";
import WorkImg2 from "../../assets/WorkImg2.webp";
import WorkImg3 from "../../assets/WorkImg3.webp";
import WorkImg4 from "../../assets/WorkImg4.webp";
import WorkImg5 from "../../assets/WorkImg5.webp";
import WorkImg6 from "../../assets/WorkImg6.webp";
import WorkImg7 from "../../assets/WorkImg7.webp";
import WorkImg8 from "../../assets/WorkImg8.webp";
import WorkImg9 from "../../assets/WorkImg9.webp";
import WorkImg10 from "../../assets/WorkImg10.webp";
import WorkImg11 from "../../assets/WorkImg11.webp";
import WorkImg12 from "../../assets/WorkImg12.webp";
import WorkImg13 from "../../assets/WorkImg13.webp";

function Works() {
  return (
    <div className=" flex sm:flex-row flex-col gap-[3%] min-w-full ">
      <div className=" flex-1 flex flex-col gap-7 ">
        <Work link="https://konsulenttorget-client.vercel.app" title="Freelance Marketplace Web App" img={WorkImg12} />
        <Work link="https://rent-car-cyan.vercel.app" title="Rental Service Management System" img={WorkImg10} />
        <Work link="https://new-brandio-portfolio.vercel.app" title="Modern company portfolio for brandio" img={WorkImg9} />
        {/* <Work link="https://restaurent-jet.vercel.app" title="Restaurent Landing Page" img={WorkImg7} /> */}
        <Work link="https://brandio.abmgloballtd.com" title="Brandio Creative Design Solutions" img={WorkImg2} />
        <Work link="https://upsilon.abmgloballtd.com" title="Upsilon Cutting-Edge Software" img={WorkImg1} />
        <Work link="https://mdshahed89.github.io/Fitness_Responsive_Website" title="SHD Club Fitness Hub" img={WorkImg5} />
      </div>
      <div className=" flex-1 flex flex-col gap-7 ">
        <Work link="https://ai-dashboard-frontend.vercel.app/dashboard" title="AI Chatbot with Voice & Image | Custom Integration" img={WorkImg13} />
        <Work link="https://instacruit.no" title="Recruitment and Hiring Platform" img={WorkImg11} />
        <Work link="https://growix-portfolio.vercel.app" title="Growix portfolio" img={WorkImg8} />
        <Work link="https://abmgloballtd.com" title="ABM Global Leading Solutions" img={WorkImg3} />
        <Work link="https://mdshahed89.github.io/Branging-Agency-Website" title="SHD Design Branding Agency" img={WorkImg4} />
        <Work link="https://brandio.abmgloballtd.com" title="Innovative Full Stack Developer" img={WorkImg6} />
      </div>
    </div>
  );
}

export default Works;
