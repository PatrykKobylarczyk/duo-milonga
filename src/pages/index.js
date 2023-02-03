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
  const milonga = ["D", "u", "o", "\u00A0 ", "M", "i", "l", "o", "n", "g", "a"];

  const harp_en = `Aneta Salwińska - harp`;
  const harp_pl = `Aneta Salwińska - harfa`;
  const accordion_en = `Konrad Salwiński - accordion`;
  const accordion_pl = `Konrad Salwiński - akordeon`;

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
          isIOS ? "bottom-[20vh]" : "bottom-[24vh]"
        } md:top-[60vh] text-2xl md:text-3xl font-medium md:font-bold z-[7]`}
      >
        <motion.div
          className="flex text-2xl lg:text-4xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {milonga.map((letter, i) => (
            <motion.div key={i} variants={item}>
              {letter}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex text-xs md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {harp}
        </motion.div>

        <motion.div
          className="flex text-xs md:text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {accordion}
        </motion.div>

        <motion.button
          className="w-28 md:w-40 border-[1px] border-white rounded-full font-semibold text-xs md:text-sm h-8 md:h-20 mt-3 hover:border-red hover:bg-red transition duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <Link to="/contact">{contactUs}</Link>
        </motion.button>
      </div>

      <Head title="Duo Milonga- Home" />
    </div>
  );
};

export default IndexPage;
