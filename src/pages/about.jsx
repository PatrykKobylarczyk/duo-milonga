import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

//LIBS'
import { motion } from "framer-motion";

//COMPONENTS
import AboutDuoContent from "../components/AboutDuoContent";
import AboutAnetaContent from "../components/AboutAnetaContent";
import AboutKonradContent from "../components/AboutKonradContent";

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
  const [showMoreDuo, setShowMoreDuo] = useState(false);
  const [showMoreAneta, setShowMoreAneta] = useState(false);
  const [showMoreKonrad, setShowMoreKonrad] = useState(false);

  const lang = language === "PL" ? lang_EN : lang_PL;

  const handleShowMore = (name) => {
    switch (name) {
      case "duo":
        setShowMoreDuo((prev) => !prev);
        break;
      case "aneta":
        setShowMoreAneta((prev) => !prev);
        break;
      case "konrad":
        setShowMoreKonrad((prev) => !prev);
        break;
      default:
        console.log("Opps");
    }
  };

  return (
    <div className="w-full relative page">
      {/* BACKGROUND  */}
      <div className="fixed overflow-hidden top-0 right-0 w-full">
        <StaticImage
          src="../assets/images/04.jpg"
          alt="main room"
          className="fixed w-full h-screen -z-[2]"
          objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
        />

        <motion.div
          className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 1.2 }}
        ></motion.div>
      </div>

      {/* CONTENT */}
      <section className="absolute left-1/2 -translate-x-1/2 w-full md:max-w-6xl py-20 lg:py-32 px-10 mt-[55vh] z-[5]">
        <h1 className="text-3xl lg:text-4xl font-bold mb-12">
          {lang.about_title}
        </h1>
        <p>{lang.about_description_paragraph1}</p>
        {isAboveMediumScreens ? (
          <AboutDuoContent lang={lang} />
        ) : (
          showMoreDuo && <AboutDuoContent lang={lang} />
        )}
        {!isAboveMediumScreens && (
          <button className="mt-5" onClick={() => handleShowMore("duo")}>
            {showMoreDuo ? lang.about_less : lang.about_more}
          </button>
        )}

        {/* Aneta */}
        <div className="mt-20 lg:mt-40">
          <div className="flex flex-col md:flex-row items-end w-full gap-5">
            <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-right">
              {lang.about_aneta_name}
            </h1>
            <StaticImage
              src="../assets/images/Aneta.jpg"
              alt="main room"
              className="w-full md:w-1/2 brightness-110"
            />
          </div>
          <p className="mt-10 lg:mt-10">{lang.about_aneta_paragraph1}</p>
          {isAboveMediumScreens ? (
            <AboutAnetaContent lang={lang} />
          ) : (
            showMoreAneta && <AboutAnetaContent lang={lang} />
          )}
          {!isAboveMediumScreens && (
            <button className="mt-5" onClick={() => handleShowMore("aneta")}>
              {showMoreAneta ? lang.about_less : lang.about_more}
            </button>
          )}
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
              src="../assets/images/Konrad.jpg"
              alt="main room"
              className="w-full md:w-1/2"
            />
            {isAboveMediumScreens && (
              <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold md:text-left">
                {lang.about_konrad_name}
              </h1>
            )}
          </div>
          <p className="mt-10 lg:mt-10">{lang.about_konrad_paragraph1}</p>
          {isAboveMediumScreens ? (
            <AboutKonradContent lang={lang} />
          ) : (
            showMoreKonrad && <AboutKonradContent lang={lang} />
          )}
          {!isAboveMediumScreens && (
            <button className="mt-5" onClick={() => handleShowMore("konrad")}>
              {showMoreKonrad ? lang.about_less : lang.about_more}
            </button>
          )}
        </div>
      </section>
      <div className=" fixed left-0 top-0 w-full h-[20vh] bg-gradient-to-b from-black z-10"></div>
      <div className=" fixed left-0 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black z-10"></div>
    </div>
  );
};

export default About;

export const Head = () => <title>Duo Milonga - About</title>
