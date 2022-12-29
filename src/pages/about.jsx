import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;

  return (
    <div className="pages w-full relative mb-40">
      <div className="pages fixed top-0 right-0 w-full  ">
        <StaticImage
          src="../assets/images/Duo/08.jpg"
          alt="main room"
          className="pages fixed w-full h-screen -z-[2]"
          objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
        />
       
        <motion.div
          className="pages fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut",delay: .5, duration: 2 }}
        ></motion.div>
        
      </div>
      <div className="text-white flex w-full justify-center lg:px-6 lg:justify-start z-0 ">
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full md:max-w-6xl py-20 lg:py-32 px-10">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12">
            {lang.about_title}
          </h1>
          <p>{lang.about_description_paragraph1}</p>
          <p className="mt-12">{lang.about_description_paragraph2}</p>
          <ul className="mt-3">
            {lang.about_description_paragraph_festivals.map((el, i) => (
              <li key={i} className="">
                - {el}
              </li>
            ))}
          </ul>

          {/* Aneta */}
          <div className="mt-20 lg:mt-40">
            <div className="flex flex-col md:flex-row items-end w-full gap-5">
              <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-right">
                {lang.about_aneta_name}
              </h1>
              <StaticImage
                src="../assets/images/Aneta/03.jpg"
                alt="main room"
                className="w-full md:w-1/2 brightness-110"
                objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
              />
            </div>
            <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph1}</p>
            <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph2}</p>
            <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph3}</p>
            <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph4}</p>
            <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph5}</p>
            <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph6}</p>
          </div>

          {/* Konrad */}
          <div className="my-20 lg:my-40">
            <div className="flex flex-col md:flex-row items-end w-full gap-5">
              {!isAboveMediumScreens && (
                <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-left">
                  {lang.about_konrad_name}
                </h1>
              )}
              <StaticImage
                src="../assets/images/Konrad/02.jpg"
                alt="main room"
                className="w-full md:w-1/2"
                objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
              />
              {isAboveMediumScreens && (
                <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-left">
                  {lang.about_konrad_name}
                </h1>
              )}
            </div>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph1}</p>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph2}</p>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph3}</p>
            <ul className="mt-3">
              {lang.about_konrad_festivals.map((el, i) => (
                <li key={i}>- {el}</li>
              ))}
            </ul>
            <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph4}</p>
          </div>
        </section>
      </div>
      <div className=" fixed left-0 top-0 w-full h-screen bg-gradient-layout-lighter z-10"></div>
    </div>
  );
};

export default About;
