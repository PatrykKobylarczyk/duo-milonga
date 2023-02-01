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
  const harp_en = ["A","n","e","t","a","\u00A0\ ","S","a","l","w","i","ń","s","k","a","\u00A0\ ","-","\u00A0\ ","H", "a","r", "p"];
  const harp_pl = ["A","n","e","t","a","\u00A0\ ","S","a","l","w","i","ń","s","k","a","\u00A0\ ","-","\u00A0\ ","H","a","r","f","a"];
  const accordion_en = ["K","o","n","r","a","d","\u00A0\ ","S","a","l","w","i","ń","s","k","i","\u00A0\ ","-","\u00A0\ ","A", "c", "c", "o", "r", "d", "i", "o", "n"];
  const accordion_pl = ["K","o","n","r","a","d","\u00A0\ ","S","a","l","w","i","ń","s","k","i","\u00A0\ ","-","\u00A0\ ","A", "k", "o", "r", "d", "e", "o", "n"];
  const duo = "font-monteCarlo text-white text-4xl md:text-6xl z-50 font-semibold"
  const milonga =[<p className={duo}>d</p>, <p className={duo}>u</p>, <p className={duo}>o</p>,"\u00A0\ ", "m", "i", "l", "o", "n", "g", "a"]


  const harp = language === "PL" ? harp_en : harp_pl;
  const accordion = language === "PL" ? accordion_en : accordion_pl;
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
        className={`absolute flex flex-col justify-end text-white left-[15%] md:left-[70%] ${
          isIOS ? "top-[55vh]" : "top-[60vh]"
        } md:top-[60vh] text-2xl md:text-3xl font-medium md:font-bold z-[7]`}
      >
        <motion.div
          className="flex items-end font-Quicksand text-red text-3xl md:text-5xl mb-2 font-semibold md:font-medium"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container2}
        >
          {milonga.map((letter, i) => ( 
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex text-sm md:text-xl"
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
          className="flex text-sm md:text-xl"
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
          className="w-28 md:w-40 border-[1px] border-white rounded-full font-semibold text-xs md:text-sm h-10 mt-3 hover:border-red hover:bg-red transition duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.3 }}
        >
          <Link to="/contact">{contactUs}</Link>
        </motion.button>
      </div>

      <Head title="Duo Milonga- Home" />
    </div>
  );
};

export default IndexPage;
