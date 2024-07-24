"use client"
import {React,useState} from "react";
import Image from "next/image";
import { IoIosContact } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoFacebook,IoMdClose } from "react-icons/io";
import { FaGithub, FaTwitter,FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu,GiThink } from 'react-icons/gi';
import VideoBackground from "./components/VideoBackground";
import SkillsSection from "./components/Skills";
import My_Work from "./components/My_Work";
import Hire from "./components/Hire";
import Blog from "./components/Blog";
import ContactSection from "./components/Contact";
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
     <main className="flex flex-col justify-between gap-20">
      <div className="relative">
        {/* Mobile Hamburger Menu */}
         <div className="lg:hidden fixed top-4 left-4 z-50">
      <button 
        onClick={toggleMenu} 
        className="text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdClose className="text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GiHamburgerMenu className="text-3xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden fixed inset-0 bg-purple-800 bg-opacity-90 z-40 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="text-white text-center font-mono"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              {['Home', 'Skills', 'Work', 'Hire', 'Blog', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-xl transition-colors duration-300 ease-in-out hover:text-purple-300"
                  onClick={toggleMenu}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    

        {/* Home Section */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-12" id="home">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden lg:flex flex-col justify-between items-center py-4 gap-12 ml-5 mt-6">
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
              <a href="#home" className="group relative">
                <IoIosContact className="text-white text-4xl" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
              </a>
              <a href="#skill" className="group relative">
                <GiThink className="text-white text-4xl" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Skill</span>
              </a>
              <a href="#work" className="group relative">
                <CiCirclePlus className="text-white text-4xl" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Work</span>
              </a>
              <a href="#hire" className="group relative">
                <RxDashboard className="text-white text-4xl" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Hire</span>
              </a>
              <a href="#blog" className="group relative">
                <IoNewspaperOutline className="text-white text-4xl" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Blog</span>
              </a>
              <a href="#contact" className="group relative">
                <MdOutlineEmail className="text-white text-4xl" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
              </a>
            </div>
          </div>
          
          {/* Right Container (Video Background) */}
          <div className="flex flex-1 justify-end w-full lg:w-9/12 relative min-h-screen">
            <VideoBackground />
            <div className="absolute inset-0 flex items-center">
              <div className="bg-gradient-to-br from-purple-500/50 to-indigo-600/50 p-4 lg:p-8 max-w-full lg:max-w-2xl mx-4 lg:ml-8 rounded-lg">
                <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-white font-mono">Hello World</h1>
                <h2 className="text-xl lg:text-3xl font-semibold mb-4 text-white font-mono">I am Emmanuel, Frontend Developer</h2>
                <p className="text-sm lg:text-lg mb-6 text-white font-mono">My passion lies in staying at the forefront of the latest technologies and trends, and I am driven by the desire to continually enhance my professional experience and knowledge...</p>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="/pdf/Resume.pdf" download className="bg-white text-black px-4 py-2 rounded font-mono inline-block w-full sm:w-auto text-center">DOWNLOAD CV</a>
                   <div className="flex items-center space-x-4">
                    <a href="https://web.facebook.com/Emmaugo.214/" target='blank'>
                      <IoLogoFacebook className="text-2xl cursor-pointer text-white" />
                    </a>
                    <a href="https://x.com/9Gunna9" target='blank'>
                      <FaTwitter className="text-2xl cursor-pointer text-white" />
                    </a>
                    <a href="https://github.com/Dev-Emmyy" target='blank'>
                      <FaGithub className="text-2xl cursor-pointer text-white" />
                    </a> 
                    <a href="http://" target='blank'>
                      <FaLinkedin className="text-2xl cursor-pointer text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10" id="skill">
        <SkillsSection />
      </div>

      <div id="work">
        <My_Work />
      </div>

      <div id="hire">
        <Hire />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
