import React from "react";

//LIBS
import { motion } from "framer-motion";

// COMPONENTS
import VideoWindow from "./VideoWindow";

// DATA
import { videoData } from "../data/videoData";

const VideoRaw = ({setShowModal, item}) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      variants={item}
      transition={{ delay:2, staggerChildren: 0.1, delayChildren: 0.5 }}
    >
      {videoData.map((video, i) => (
        <motion.div key={i} variants={item}>
          <VideoWindow setShowModal={setShowModal} title={video.title} thumbnail={video.thumbnail} id={i}/>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VideoRaw;
