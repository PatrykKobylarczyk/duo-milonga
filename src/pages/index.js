import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";
import { isIOS } from "react-device-detect";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import Head from "../components/Head";
import Loader from "../components/Loader";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import { Link } from "gatsby";

const IndexPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language] = useRecoilState(languageState);

  //Titles Animation
  const space = "\u00A0 "
  const harp_en = (`Aneta${space} Salwińska${space} -${space} harp`).split('')
  const harp_pl = (`Aneta${space} Salwińska${space} -${space} harfa`).split('')
  const accordion_en2 = (`Konrad${space}Salwiński${space} -${space} accordion`).split('')
  const accordion_pl2 = (`Konrad${space} Salwiński${space} -${space} akordeon`).split('')
  const milonga2 =["D","u","o","\u00A0 ", "m", "i", "l", "o", "n", "g", "a"]


  const harp = language === "PL" ? harp_en : harp_pl;
  const accordion = language === "PL" ? accordion_en2 : accordion_pl2;
  const contactUs = language === "PL" ? "Contact" : "Kontakt";

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
        delayChildren: 1.3,
        duration: 2,
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
            src="../assets/images/06-_B2A3836-1popr.jpg"
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
      <div
        className={`absolute flex flex-col justify-end text-white left-1/2 -translate-x-1/2 md:left-[70%] ${
          isIOS ? "top-[55vh]" : "top-[60vh]"
        } md:top-[60vh] text-2xl md:text-3xl font-medium md:font-bold z-[7]`}
      >
        <motion.div
          className="flex text-2xl lg:text-4xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container2}
        >
          {milonga2.map((letter, i) => ( 
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex text-xs md:text-xl"
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
          className="flex text-xs md:text-xl"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {accordion.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          className="w-28 md:w-40 border-[1px] border-white rounded-full font-semibold text-xs md:text-sm h-8 md:h-12 mt-3 hover:border-red hover:bg-red transition duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <Link to="/contact">{contactUs}</Link>
        </motion.button>
      </div>

      <Head title="Duo Milonga- Home" />
    </div>
  );
};

export default IndexPage;
