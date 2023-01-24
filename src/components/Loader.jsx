import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed left-0 top-0 w-full h-screen bg-[#020F1A]"
      initial={{ opacity: 1, zIndex: 1000 }}
      animate={{ opacity: 0, zIndex: -10 }}
      transition={{ ease: "easeInOut", duration: .8, delay: .3  }}
    ></motion.div>
  );
};

export default Loader;
