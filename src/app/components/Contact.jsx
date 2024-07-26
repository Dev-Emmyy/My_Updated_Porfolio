"use client"
import {React,useState} from 'react';
import Image from 'next/image';
import { IoLogoFacebook } from 'react-icons/io';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-mono">
      {/* Personal Info Section */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-purple-500/50 to-indigo-600/50 text-white p-8">
        <div className="flex items-center mb-6">
          <Image
            src="/image/logo.png"
            width={55}
            height={55}
            alt="Logo"
            className="rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Emmanuel</h1>
            <h3 className="text-lg">Frontend Developer</h3>
          </div>
        </div>
        
        <a href="/pdf/Resume.pdf" download className="bg-white text-blue-600 py-2 px-4 rounded font-bold mb-6 hover:bg-blue-100 transition duration-300 inline-block">DOWNLOAD CV</a>
        
        <div className="flex items-center space-x-4 mb-6">
          <a href="https://web.facebook.com/Emmaugo.214/" target='blank'>
           <IoLogoFacebook className="text-2xl cursor-pointer hover:text-blue-300" />
          </a>
          <a href="https://x.com/9Gunna9" target='blank'>
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-300" />
          </a>
          <a href="https://github.com/Dev-Emmyy" target='blank'>
          <FaGithub className="text-2xl cursor-pointer hover:text-blue-300" />
          </a> 
          <a href="http://" target='blank'>
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-300" />
          </a>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-blue-200">My personal contact</p>
          <p className="text-lg">+234 9019742746</p>
        </div>
        
        <div>
          <p className="text-sm text-blue-200">Say hello</p>
          <p className="text-lg break-all">emmanuelugochukwu2000@gmail.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-2/3 bg-neutral-900 p-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-6">Contact<span className="text-purple-700"> Me</span></h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What is your name?" 
              className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
              required
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What is your email?" 
              className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
              required
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here" 
              rows="5"
              className="w-full p-2 rounded bg-neutral-800 text-white outline-none"
              required
            ></textarea>
            <button 
              type="submit" 
              className="bg-gradient-to-br from-purple-500/50 to-indigo-600/50 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500">There was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
