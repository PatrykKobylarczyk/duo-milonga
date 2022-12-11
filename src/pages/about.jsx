import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "../hooks/useMediaQuery";
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language, setLanguage] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;

  console.log(lang.about_description_paragraph_festivals);

  return (
    <div className="pages">
      <div className="right-0 h-full w-full">
        <StaticImage
          src="../assets/images/Duo/08.jpg"
          alt="main room"
          className=" absolute w-full h-screen z-0"
          objectPosition={`${isAboveMediumScreens ? "0% 0%" : "31% 0%"}`}
        />
        <div className=" absolute left-0 top-0 w-full h-screen bg-gradient-layout"></div>
      </div>
      <div className="page flex justify-center px-6 lg:justify-start lg:pl-40">
        <div className="max-w-6xl h-full py-20 lg:py-32 px-10 w-3xl md:max-w-4xl ">
          <h1 className="text-3xl font-bold mb-12">{lang.about_title}</h1>
          <p>{lang.about_description_paragraph1}</p>
          <p className="mt-12">{lang.about_description_paragraph2}</p>
          <ul className="mt-3">
            {lang.about_description_paragraph_festivals.map((el, i) => (
              <li key={i} className="">
                - {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
