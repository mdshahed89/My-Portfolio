import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Profile from "./Pages/Profile/Profile";
import Resume from "./Pages/Resume/Resume";
import Article from "./Pages/Articles/Article";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <main className=" lg:flex hidden font-Play  items-center justify-center bg-white h-screen px-5 ">
        <div className="  flex shadow-lg h-[750px] w-full  max-w-[1300px] ml-[6%]   ">
          <div className=" w-[35%] bg-[#E6EAEE] rounded-lg relative ">
            <Profile />
            <div className=" absolute flex  top-0 left-[-10%]  h-full  items-center justify-center ">
              <Header />
            </div>
          </div>
          <div className=" w-[65%]  bg-[#F5F7F8] rounded-lg overflow-y-auto scrollbarHide  ">
            <Outlet />
          </div>
        </div>
      </main>

      <main className=" lg:hidden block  ">
        <div className=" flex gap-2 px-2 h-screen">
          <div className=" w-[15%] md:w-[10%]  ">
            <Header />
          </div>
          <div className=" w-[85%] md:w-[90%] overflow-y-auto scrollbarHide  flex flex-col gap-5 rounded-md ">
            <div className=" bg-[#E6EAEE] rounded-md  ">
              <Profile />
            </div>
            <div className=" bg-[#E6EAEE] rounded-md ">
              <About />
            </div>
            <div className=" bg-[#E6EAEE] rounded-md ">
              <Resume />
            </div>
            <div className=" bg-[#E6EAEE] rounded-md ">
              <Projects />
            </div>
            <div className=" bg-[#E6EAEE] rounded-md ">
              <Article />
            </div>
            <div className=" bg-[#E6EAEE] rounded-md ">
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
