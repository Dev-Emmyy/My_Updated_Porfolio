import React from "react";
import Image from "next/image";
import { IoIosContact } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithub, FaTwitter,FaLinkedin } from "react-icons/fa";
import VideoBackground from "./components/VideoBackground";
import SkillsSection from "./components/Skills";
import My_Work from "./components/My_Work";
import Hire from "./components/Hire";
import Blog from "./components/Blog";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col jusgtify-between gap-20">
      <div className="flex flex-row justify-between w-full gap-12">
        {/* Left Sidebar */}
        <div className="flex flex-col justify-betwwen items-center py-4 gap-12 ml-5 mt-6 ">
          {/* Logo */}
          <div>
            <Image
              src="/image/logo.png"
              width={60}
              height={60}
              alt="Logo"
            />
          </div>
          
          {/* Icons */}
          <div className="bg-gradient-to-br from-purple-500/50 to-indigo-600/50 flex flex-col justify-between items-center gap-8 w-20 py-10 rounded-2xl">
            <div><IoIosContact className="text-white text-4xl" /></div>
            <div><CiCirclePlus className="text-white text-4xl" /></div>
            <div><RxDashboard className="text-white text-4xl" /></div>
            <div><IoNewspaperOutline className="text-white text-4xl" /></div>
            <div><MdOutlineEmail className="text-white text-4xl" /></div>
          </div>
        </div>
        
        {/* Right Container (Video Background) */}
        <div className="flex flex-1 justify-end w-9/12 relative">
        <VideoBackground/>
        <div className="absolute inset-0 flex items-center">
          <div className="bg-gradient-to-br from-purple-500/50 to-indigo-600/50 p-8 max-w-2xl ml-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-2 text-white font-mono">Hello World</h1>
            <h1 className="text-3xl font-semibold mb-4 text-white font-mono">I am Emmanuel, Frontend Developer</h1>
            <h6 className="text-lg mb-6 text-white font-mono">My passion lies in staying at the forefront of the latest technologies and trends, and I am driven by the desire to continually enhance my professional experience and knowledge...</h6>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-black px-4 py-2 rounded font-mono">DOWNLOAD CV</button>
              <IoLogoFacebook className="text-2xl cursor-pointer text-white" />
              <FaTwitter className="text-2xl cursor-pointer text-white" />
              <FaGithub className="text-2xl cursor-pointer text-white" />
              <FaLinkedin className="text-2xl cursor-pointer text-white" />
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="mx-10">
        <SkillsSection/>
      </div>

      <div>
        <My_Work/>
      </div>

      <div>
        <Hire/>
      </div>

      <div>
        <Blog/>
      </div>

      <div>
        <ContactSection/>
      </div>
     
   </main>
  );
}
