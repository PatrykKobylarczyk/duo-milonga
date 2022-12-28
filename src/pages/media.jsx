import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

// LIBS
import { motion } from "framer-motion";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// COMPONENTS
import Music from "../components/Music";
import Gallery from "../components/Gallery";
import Video from "../components/Video";

// STATE
import { useRecoilState } from "recoil";
import {
  languageState,
  mediumClicked,
  selectedMediumState,
} from "../atoms/atom";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";

const Media = () => {
  const [language] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;
  const [selectedMedium, setSelectedMedium] =
    useRecoilState(selectedMediumState);
  const [isMediumClicked, SetMediumClicked] = useRecoilState(mediumClicked);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const handleSetMedium = (mediumName) => {
    SetMediumClicked(false);
    setSelectedMedium(mediumName);
    SetMediumClicked(true);
  };

  let medium;
  switch (selectedMedium) {
    case lang.menu_media_music:
      medium = <Music />;
      break;
    case lang.menu_media_video:
      medium = <Video />;
      break;
    case lang.menu_media_gallery:
      medium = <Gallery />;
      break;
    default:
      console.log("opss");
  }

  // Framer Motion variants
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const variantsMedia = {
    open: { opacity: 0, x: "100%" },
    closed: { opacity: 1, x: 0 },
  };

  return (
    <div className="pages relative page h-screen">
      <StaticImage
        src="../assets/images/Duo/09.jpg"
        alt="main room"
        className="h-full fixed left-0 top-0 z-[2]"
        objectPosition=" 65% 0"
      />
      <div className="fixed left-0 top-0 w-full h-full  bg-gradient-layout z-[3]"></div>
      <div className="fixed left-0 top-0 w-full h-full  bg-gradient-layout-darker z-[3]"></div>
      {isAboveMediumScreens && (
        <div className="fixed left-0 top-0 w-full h-full  bg-gradient-left-side z-[3]"></div>
      )}

      <section className="absolute top-0 left-0 w-full h-full flex overflow-hidden">
        {isAboveMediumScreens ? (
          <>
            <div className="w-full  md:w-1/5 h-full flex flex-col justify-center items-start pl-32 lg:pl-40 z-30">
              <ul className="text-lg flex flex-col gap-3">
                <li
                  className={`${
                    selectedMedium === lang.menu_media_music ? "active" : null
                  }`}
                >
                  <button
                    onClick={() => handleSetMedium(lang.menu_media_music)}
                  >
                    {lang.menu_media_music}
                  </button>
                </li>
                <li
                  className={`${
                    selectedMedium === lang.menu_media_video ? "active" : null
                  }`}
                >
                  <button
                    onClick={() => handleSetMedium(lang.menu_media_video)}
                  >
                    {lang.menu_media_video}
                  </button>
                </li>
                <li
                  className={`${
                    selectedMedium === lang.menu_media_gallery ? "active" : null
                  }`}
                >
                  <button
                    onClick={() => handleSetMedium(lang.menu_media_gallery)}
                  >
                    {lang.menu_media_gallery}
                  </button>
                </li>
              </ul>
            </div>
            <div
              className="absolute lg:relative top-0 right-0 w-full md:w-4/5 h-screen grid place-items-center z-30 translate-x-['100%']"
              animate={!isMediumClicked && "closed" }
              variants={variantsMedia}
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
            >
              {isAboveMediumScreens && medium}
            </div>
          </>
        ) : (
          <>
            <motion.div
              className="w-full h-full flex flex-col justify-center items-center md:items-start md:pl-40 z-30"
              animate={isMediumClicked ? "closed" : "open"}
              variants={variants}
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
            >
              <ul className="text-lg flex flex-col gap-3">
                <li>
                  <button
                    onClick={() => handleSetMedium(lang.menu_media_music)}
                  >
                    {lang.menu_media_music}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSetMedium(lang.menu_media_video)}
                  >
                    {lang.menu_media_video}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSetMedium(lang.menu_media_gallery)}
                  >
                    {lang.menu_media_gallery}
                  </button>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className={`absolute lg:relative top-0 left-0 w-full lg:w-4/5 h-screen grid place-items-center z-30 ${ !isAboveMediumScreens && ('translate-x-[100%]')}`}
              animate={isMediumClicked ? "closed" : "open"}
              variants={variantsMedia}
              transition={{ duration: 0.6, ease: [0.435, 0.135, 0.09, 0.83] }}
            >
              {isMediumClicked && medium}
            </motion.div>
          </>
        )}
      </section>
    </div>
  );
};

export default Media;
