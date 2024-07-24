"use client";
import { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const SkillsSection = () => {
  const skillsRef = useRef(null);

  const skills = [
    { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: FaJs, name: "JAVASCRIPT", color: "text-yellow-400" },
    { icon: FaReact, name: "REACT.JS", color: "text-blue-400" },
    { icon: SiNextdotjs, name: "NEXT.JS", color: "text-black" },
    { icon: SiTailwindcss, name: "TAILWIND CSS", color: "text-teal-400" },
    { icon: FaNodeJs, name: "NODE JS", color: "text-green-600" },
    { icon: FaGithub, name: "GIT-HUB", color: "text-gray-800" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItems = skillsRef.current.children;
    Array.from(skillItems).forEach((item) => {
      observer.observe(item);
    });

    return () => {
      Array.from(skillItems).forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-white text-center font-mono mb-10'>Skills</h1>
        <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
            <div 
            key={index} 
            className="flex items-center py-4 px-3 bg-gradient-to-br from-purple-500/50 to-indigo-600/50 rounded-lg shadow-md opacity-0 translate-x-[-50px] transition-all duration-500 ease-out"
            >
            <skill.icon className={`text-4xl ${skill.color} mr-3`} />
            <div className="text-sm font-medium">{skill.name}</div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default SkillsSection;