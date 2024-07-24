'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const blogPosts = [
  {
    title: "Emerging Technologies to watch in 2024",
    image: "/blog/metaverse.jpg",
    link: "https://medium.com/@emmanuelugochukwu2000/emerging-technologies-to-watch-in-2023-926d3f15c8a8"
  },
  {
    title: "The future of work in a tech-driven world",
    image: "/blog/tech-driven-world.jpg",
    link: "https://medium.com/@emmanuelugochukwu2000/the-future-of-work-in-a-tech-driven-world-7e4fda9ec730"
  },
  {
    title: "How to get started in a tech career",
    image: "/blog/tech-career1.jpg",
    link: "https://medium.com/@emmanuelugochukwu2000/how-to-get-started-in-a-tech-career-a687de4236f0"
  },
  {
    title: "The impact of technology on society",
    image: "/blog/technology.jpg",
    link: "https://medium.com/@emmanuelugochukwu2000/the-impact-of-technology-on-society-207ccd25f090"
  }
];

const Blog = () => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Latest <span className="text-blue-600">Posts</span></h1>
          <p className="text-gray-600">See all my posts</p>
          <a href="https://medium.com/@emmanuelugochukwu2000" className="text-blue-600 hover:underline">View all</a>
        </div>
        
        <div className="relative">
          {/* Blog posts container */}
          <div className="blog-posts-container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="static-swiper"
            >
              {blogPosts.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full blog-post-card">
                    <Image
                      src={post.image}
                      width={400}
                      height={300}
                      alt={post.title}
                      className="w-full h-48 object-cover blog-post-image"
                    />
                    <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                      <h2 className="text-xl font-semibold mb-2 blog-post-title">{post.title}</h2>
                      <a
                        href={post.link}
                        className="text-blue-600 hover:underline mt-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See Post
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom navigation arrows */}
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 z-10 transition-all duration-300 ease-in-out">
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 z-10 transition-all duration-300 ease-in-out">
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;