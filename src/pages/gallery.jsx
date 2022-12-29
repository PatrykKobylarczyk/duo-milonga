import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const Gallery = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="h-screen pages">
      <StaticImage
        src="../assets/images/Duo/01.jpg"
        alt="main room"
        className="pages fixed w-full h-screen -z-[2]"
        objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% -20%"}`}
      />
      <motion.div
          className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: .6 }}
          transition={{ ease: "easeInOut",delay: .5, duration: 1 }}
        ></motion.div>
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout-lighter"></div>

        <div>
          
        </div>
    </div>
  );
};

export default Gallery;
