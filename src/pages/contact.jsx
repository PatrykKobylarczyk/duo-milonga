import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

// LIBS
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

// COMPONENTS
import { SlArrowRight } from "react-icons/sl";
import Head from "../components/Head";
import Loader from "../components/Loader";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

// DATA
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";

const Contact = () => {
  const [language] = useRecoilState(languageState);
  const [isContactForm, setIsContactForm] = useState(false);
  const lang = language === "PL" ? lang_EN : lang_PL;
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
    return ()=>{
      setPageReady(false)
    }
  });

  return (
    <div className="page pages relative h-screen flex flex-col justify-center overflow-hidden">
      {!pageReady && <Loader/>}
      <div>
        (
        <motion.div
          className="pages fixed left-0 top-0 w-full h-screen bg-darker-gradient-bg z-[5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
        ></motion.div>
        )
        <StaticImage
          src="../assets/images/Kontakt.jpg"
          alt="main room"
          className="fixed top-0 left-0 h-screen"
          // objectPosition="62% 0"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center lg:gap-10 z-10">
        <div className="flex flex-col items-center lg:items-start lg:pl-40  lg:w-1/3 ">
          <div>
            {!isContactForm && (
              <div className="flex flex-col gap-2">
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
                    <a href="mailto:duomilonga@gmail.com">
                      {lang.contact_mail}
                    </a>
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
              <p>{lang.contact_contact_form}</p>
              <span className="ml-4 mt-1 rotate-90">
                <SlArrowRight
                  size={"12px"}
                  className={`${isContactForm ? "rotate-180" : null}`}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="px-12 lg:px-40 z-20">
          {isContactForm && <ContactForm language={language} />}
        </div>
      </div>
      <Head title='Duo Milonga - Contact'/>
    </div>
  );
};

export default Contact;
