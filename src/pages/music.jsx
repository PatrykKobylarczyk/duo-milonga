import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS
import { motion } from "framer-motion";

//COMPONENTS
import MusicPlayer from "../components//MusicPlayer";
import Head from "../components/Head";
import Loader from "../components/Loader";

const Music = () => {

  return (
    <div className="pages relative page h-screen ">
      <Loader />
      <StaticImage
        src="../assets/images/10-_B2A3749-1sin.jpg"
        alt="main room"
        className="h-screen fixed left-0 top-0 -z-[2]"
        objectPosition=" 75% 0"
      />
      <div className="w-full h-full fixed top-0 left-0 grid place-items-center z-[6]">
        <MusicPlayer />
      </div>
      <motion.div
        className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
      ></motion.div>
      <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
      <div className=" fixed left-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black z-10"></div>
      <Head title="Duo Milonga - Music" />
    </div>
  );
};

export default Music;
