import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
//LIBS'
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

//COMPONENTS
import GalleryRow from "../components/GalleryRow";
import ImageCarousel from "../components/ImageCarousel";
import Head from "../components/Head";
import Loader from "../components/Loader";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const Gallery = ({ data }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language] = useRecoilState(languageState);

  //Title Animation
  const photos_en = ["P", "h", "o", "t", "o", "s"];
  const photos_pl = ["Z", "d", "j", "ę", "c", "i", "a"];

  const lang = language === "PL" ? photos_en : photos_pl;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.3,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const handleImageModal = (_, i) => {
    setCurrentIndex(i);
    setShowModal(true);
  };

  return (
    <div
      className={`page h-screen relative ${showModal && "overflow-hidden "}`}
    >
      <Loader />

      {/* BACKGROUND  */}
      <div className="w-full fixed  top-0 right-0">
        <StaticImage
          src="../assets/images/16_B2A3473-1.jpg"
          alt="main room"
          className="fixed w-full h-screen -z-[2]"
          objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
        />
        <motion.div
          className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 0.8 }}
        ></motion.div>
      </div>

      {/* CONTENT */}
      <section className="w-full sm:max-w-[70vw] flex flex-col mx-auto px-5 lg:px-10 py-20 z-[19]">
        <motion.div
          className="flex justify-end text-4xl md:text-6xl font-bold z-[7] mt-[35vh] sm:mt-[40vh] mb-10"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          variants={item}
          transition={{ delay: 2, staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          <GalleryRow
            data={data}
            handleImageModal={handleImageModal}
            setShowModal={setShowModal}
          />
        </motion.div>

        {showModal && (
          <ImageCarousel
            currentIndex={currentIndex}
            setShowModal={setShowModal}
            data={data}
          />
        )}
      </section>

      {/* BLENDS */}
      <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
      <div className=" fixed left-0 bottom-0 w-full h-[10vh] z-10"></div>
      <Head title="Duo Milonga - Gallery" />
    </div>
  );
};

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        name: {
          nin: [
            "hqdefault"
            "1-Home Poczernione-pion"
            "1-Home Poczernione"
            "tn1"
            "tn2"
            "tn4"
            "Bez nazwy-1"
            "favicon"
          ]
        }
      },
      sort: {name: ASC}
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
