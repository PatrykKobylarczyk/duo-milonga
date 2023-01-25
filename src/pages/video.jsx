import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

//COMPONENTS
import Head from "../components/Head";

//LIBS
import { motion } from "framer-motion";
import VideoRaw from "../components/VideoRaw";
import VideoModal from "../components/VideoModal";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import Loader from "../components/Loader";

const Video = () => {
  const [showModal, setShowModal] = useState(false);
  const [language] = useRecoilState(languageState);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
    return () => {
      setPageReady(false);
    };
  },[]);

  //Title Animation
  const videos_en = ["V", "i", "d", "e", "o", "s"];
  const videos_pl = ["F", "i", "l", "m", "y"];

  const lang = language === "PL" ? videos_en : videos_pl;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div
      className={`page h-screen relative ${showModal && "overflow-hidden "}`}
    >
      {!pageReady && <Loader />}
      {/* BACKGROUN */}
      <div className="h-screen fixed left-0 top-0 -z-[2]">
        <StaticImage
          src="../assets/images/3-_B2A4045-1popr.jpg"
          alt="main room"
          className="h-screen"
          // objectPosition=" 33% 0"
        />
      </div>
      <motion.div
        className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
      ></motion.div>

      {/* CONTENT */}
      <section className="w-full sm:max-w-[70vw] flex flex-col mx-auto px-5 lg:px-10 py-20">
        <motion.div
          className="flex justify-end text-4xl md:text-6xl font-bold z-[7] mt-[35vh] sm:mt-[40vh] mb-5 md:mb-10"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {lang.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <VideoRaw setShowModal={setShowModal} item={item} />

        {showModal && <VideoModal setShowModal={setShowModal} />}
      </section>

      {/* BLENDS */}
      <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
      <div className=" fixed left-0 bottom-0 w-full h-[10vh] bg-gradient-to-t from-black z-10"></div>

      <Head title="Duo Milonga - Videos" />
    </div>
  );
};

export default Video;
