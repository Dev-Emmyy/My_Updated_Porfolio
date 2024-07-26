"use client"
import { React,useEffect, useRef } from 'react';


const VideoBackground = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Adjust the playback rate as needed
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <video 
        autoPlay 
        muted 
        loop 
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 filter brightness-75"
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;