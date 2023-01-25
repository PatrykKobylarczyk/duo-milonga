import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed left-0 top-0 w-full h-screen"
      initial={{ zIndex: 20 }}
      animate={{ zIndex: -10 }}
      transition={{ delay: .7 }}
    >
      <motion.div
        className="w-full h-full bg-[#020a11]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.2}}
      ></motion.div>
    </motion.div>
  );
};

export default Loader;
