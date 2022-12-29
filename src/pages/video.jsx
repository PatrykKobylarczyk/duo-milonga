import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS
import { motion } from "framer-motion";

// COMPONENTS
import VideoWindow from "../components/VideoWindow";

// DATA
import { videoData } from "../data/videoData";

const video = () => {
  return (
    <div className="relative w-full h-auto flex flex-col items-center pb-32">
      <h1 className="my-40 text-3xl md:text-6xl translate-y-10 md:translate-y-16 text-white z-[7]">
        Videos
      </h1>
      <div className="h-screen fixed left-0 top-0 -z-[2]">
        <StaticImage
          src="../assets/images/Duo/08.jpg"
          alt="main room"
          className="h-screen"
          objectPosition=" 33% 0"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-30 px-5 lg:p-20 ">
        {videoData.map((video) => (
          <VideoWindow key={video.id} video={video} />
        ))}
      </div>
      <motion.div
        className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default video;
