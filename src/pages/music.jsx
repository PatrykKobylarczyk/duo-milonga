import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS
import { motion } from "framer-motion";

//COMPONENTS
import MusicPlayer from "../components//MusicPlayer";

const music = () => {
  return (
    <div className="pages relative page h-screen">
      <div className="fixed left-0 top-0 w-full h-full  bg-gradient-layout z-[1]"></div>
      <div className="fixed left-0 top-0 w-full h-full  bg-gradient-layout-lighter z-[3]"></div>
      <StaticImage
        src="../assets/images/Aneta/04.jpg"
        alt="main room"
        className="h-full fixed left-0 top-0 z-[2]"
        objectPosition=" 65% 0"
      />
      <div className="absolute top-0 left-0 w-full h-full grid place-items-center z-10">
        <MusicPlayer />
      </div>
      <motion.div
        className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: .75 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default music;
