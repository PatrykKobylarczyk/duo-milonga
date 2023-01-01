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
    <div className="page relative w-full h-auto md:h-screen md:overflow-hidden flex flex-col items-center pb-32">
      {/* BACKGROUN */}
      <div className="h-screen fixed left-0 top-0 -z-[2]">
        <StaticImage
          src="../assets/images/Duo/08.jpg"
          alt="main room"
          className="h-screen"
          objectPosition=" 33% 0"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col px-5 py-20">
        <h1 className="text-3xl z-[7] mt-[30vh] mb-10">
          Videos
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-30">
          {videoData.map((video) => (
            <VideoWindow key={video.id} video={video} />
          ))}
        </div>
      </div>
      <motion.div
        className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default video;
