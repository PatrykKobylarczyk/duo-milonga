import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "../components/ContactForm";
import useMediaQuery from "../hooks/useMediaQuery";
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language, setLanguage] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;

  return (
    <div className="page relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="flex">
        {isAboveMediumScreens && (
          <div className="h-full w-1/6 bg-[rgb(3,11,15)]"></div>
        )}
        <StaticImage
          src="../assets/images/Duo/05.jpg"
          alt="main room"
          className="h-screen left-0 z-0"
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full bg-darker-gradient-bg z-10"></div>
      <div className="absolute w-1/2 flex flex-col justify-start ml-16 lg:ml-40 z-10 overflow-x-auto gap-2">
        <h3 className="text-xl lg:text-2xl font-light">{lang.contact_title}</h3>
        <p className="text-2xl lg:text-3xl font-bold mt-5">
          {lang.contact_name}
        </p>
        <ul className="text-lg mt-5 gap-4">
          <li>
            <a href="tel:48508239654">{lang.contact_phone}</a>
          </li>
          <li>
            <a href="mailto:duomilonga@gmail.com">{lang.contact_mail}</a>
          </li>
          <li>
            <a href="https://wa.me/48508239654">{lang.contact_whatsapp}</a>
          </li>
        </ul>

        {/* <ContactForm/> */}
      </div>
    </div>
  );
};

export default Contact;
