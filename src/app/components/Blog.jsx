'use client';

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
    title: "The future of work in a tech-driven world",
    image: "/blog/tech-driven-world.jpg",
    link: "https://medium.com/@emmanuelugochukwu2000/the-future-of-work-in-a-tech-driven-world-7e4fda9ec730"
  },  
  {
    title: "Emerging Technologies to watch in 2024",
    image: "/blog/metaverse.jpg",
    link: "https://medium.com/@emmanuelugochukwu2000/emerging-technologies-to-watch-in-2023-926d3f15c8a8"
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
          <h1 className="text-3xl text-white font-bold mb-2">Latest<span className="text-purple-700"> Posts</span></h1>
          <p className="text-gray-600">See all my posts</p>
          <a href="https://medium.com/@emmanuelugochukwu2000" className="text-blue-600 hover:underline">View all</a>
        </div>
        
        <div className="relative">
          {/* Blog posts container */}
          <div className="blog-posts-container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
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
          <div className="swiper-button-prev custom-swiper-button-prev">
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </div>
          <div className="swiper-button-next custom-swiper-button-next">
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </section>

      <style jsx global>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }

        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 10;
          transition: background-color 0.3s ease;
        }

        .custom-swiper-button-prev:hover,
        .custom-swiper-button-next:hover {
          background-color: rgba(255, 255, 255, 1);
        }

        .custom-swiper-button-prev {
          left: 10px;
        }

        .custom-swiper-button-next {
          right: 10px;
        }

        @media (max-width: 640px) {
          .blog-post-card {
            margin-bottom: 1rem;
          }
          .blog-post-image {
            height: 200px;
          }
          .blog-post-title {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .blog-post-image {
            height: 180px;
          }
          .blog-post-title {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 769px) {
          .blog-post-image {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;