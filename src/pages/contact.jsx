import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "../components/ContactForm";
import useMediaQuery from "../hooks/useMediaQuery";
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [language, setLanguage] = useRecoilState(languageState);
  const [isContactForm, setIsContactForm] = useState(false);
  const lang = language === "PL" ? lang_EN : lang_PL;
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <div className="page pages relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="flex">
        {isAboveMediumScreens && (
          <div className="h-full w-1/6 bg-darker-gradient-bg"></div>
        )}
        <StaticImage
          src="../assets/images/Duo/05.jpg"
          alt="main room"
          className="h-screen left-0 z-0"
          objectPosition="62% 0"
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full bg-darker-gradient-bg z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-center items-center px-10 sm:px-24 lg:px-40">
        <div className="flex flex-col justify-start w-full z-20">
          {!isContactForm && (
            <div className="flex flex-col   gap-2">
              <h3 className="text-xl lg:text-2xl font-light">
                {lang.contact_title}
              </h3>
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
                  <a href="https://wa.me/48508239654">
                    {lang.contact_whatsapp}
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            className="mt-5 flex items-center"
            onClick={() => setIsContactForm((prev) => !prev)}
          >
            <button>{lang.contact_contact_form}</button>
            <span className="ml-4 mt-1 rotate-90">
              <SlArrowRight
                size={"12px"}
                className={`${isContactForm ? "rotate-180" : null}`}
              />
            </span>
          </button>
        </div>
        {isContactForm && <ContactForm language={language} />}
      </div>
    </div>
  );
};

export default Contact;
