import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

//COMPONENTS
import GalleryRow from "../components/GalleryRow";
import MuiModal from "@mui/material/Modal";
import ImageWindow from "../components/ImageWindow";

const Gallery = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen  relative">
      <StaticImage
        src="../assets/images/Duo/01.jpg"
        alt="main room"
        className="fixed w-full h-screen overflow-hidden -z-[2]"
        objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
      />
      <motion.div
        className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      ></motion.div>
      <div className="fixed left-0 top-0 w-full h-full bg-gradient-layout-lighter"></div>

      <GalleryRow setShowModal={setShowModal} />
      <MuiModal
        open={showModal}
        className="h-screen w-full top-0 left-0 right-0 z-50 bg-black/60 grid place-items-center"
      >
        <ImageWindow />
      </MuiModal>
      <div className=" fixed left-0 top-0 w-full h-screen bg-gradient-layout-lighter z-0"></div>
    </div>
  );
};

export default Gallery;
