import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
//LIBS'
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

//COMPONENTS
import GalleryRow from "../components/GalleryRow";
import ModalGallery from "../components/ModalGallery";
import ModalGalleryCarousell from "../components/ModalGalleryCarousell";
import ImageCarousel from "../components/ImageCarousel";

const Gallery = ({ data }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    data.allFile.edges[currentIndex].node.childImageSharp.gatsbyImageData
  );

  // Animation
  const photos = ["P", "h", "o", "t", "o", "s"];
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
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const handleImageModal = (src, i) => {
    setCurrentIndex(i);
    setCurrentImage(src);
    setShowModal(true);
  };

  return (
    <div className="page h-screen relative">
      {/* BACKGROUND  */}
      <div className="w-full fixed overflow-hidden top-0 right-0">
        <StaticImage
          src="../assets/images/Konrad/02.jpg"
          alt="main room"
          className="fixed w-full h-screen -z-[2]"
          objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
        />
        <motion.div
          className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        ></motion.div>
      </div>

      {/* CONTENT */}
      <section
        className={`w-full md:max-w-[80vw] flex flex-col mx-auto px-5 lg:px-40 py-20 z-[19] ${
          showModal ? "overflow-hidden" : "overflow-y-scroll"
        } scrollbar-hide`}
      >
        <motion.div
          className="flex justify-end text-4xl md:text-6xl font-bold z-[7] mt-[30vh] mb-10"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {photos.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          variants={item}
          transition={{ delay: 1.8, staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          <GalleryRow
            data={data}
            handleImageModal={handleImageModal}
            setShowModal={setShowModal}
          />
        </motion.div>

        {showModal && <ImageCarousel currentImage={currentImage} setShowModal={setShowModal}/>}
        
        {/* {showModal && (
          <ModalGalleryCarousell
            data={data}
            currentIndex={currentIndex}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        )} */}

        {/* BLENDS */}
        <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
        <div className=" fixed left-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black z-10"></div>
      </section>
    </div>
  );
};

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        name: { nin: ["hqdefault", "tn1"] }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 200 }
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
          sourceInstanceName
        }
      }
    }
  }
`;

export default Gallery;
