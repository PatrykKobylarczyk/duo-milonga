import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import Head from "../components/Head";
import Loader from "../components/Loader";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const IndexPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language] = useRecoilState(languageState);

  //Titles Animation
  const harp_en = ["H", "a", "r", "p",<span className="text-red font-medium ml-2 md:ml-5 text-2xl md:text-4xl">&</span>];
  const harp_pl = ["H", "a", "r", "f", "a", <span className="text-red font-medium ml-2 md:ml-5 text-2xl md:text-4xl">&</span>];
  const accordion_en = ["A", "c", "c", "o", "r", "d", "i", "o", "n"];
  const accordion_pl = ["A", "k", "o", "r", "d", "e", "o", "n"];

  const harp = language === "PL" ? harp_en : harp_pl;
  const accordion = language === "PL" ? accordion_en : accordion_pl;

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
  const container2 = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.9,
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
    <div className="pages relative h-screen overflow-hidden">
      <Loader />
      <main>
        {isAboveSmallScreens ? (
          <StaticImage
            src="../assets/images/6-_B2A3836-1popr.jpg"
            alt="main room"
            className=" h-full -z-50"
            objectPosition="32% 30%"
          />
        ) : (
          <StaticImage
            src="../assets/images/Bez nazwy-1.jpg"
            alt="main room"
            className="h-full -z-50"
            objectFit="cover"
          />
        )}
      </main>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout"></div>
      <div className="absolute flex flex-col justify-end  text-white left-[40%] md:left-[60%] top-[65vh] md:top-[70vh] text-3xl md:text-5xl font-medium z-[7]">
        <motion.div
          className="flex"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {harp.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container2}
        >
          {accordion.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Head title="Duo Milonga- Home" />
    </div>
  );
};

export default IndexPage;
