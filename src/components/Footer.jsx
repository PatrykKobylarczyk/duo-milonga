import React from "react";
import MusicButton from "./MusicButton";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const Footer = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const changeLanguage = () => {
    setLanguage(language === "PL" ? "EN" : "PL");
  };


  return (
    <footer>
      <div className="flex justify-between items-center">
        <SocialMedia />
        <div className="flex gap-5">
          <Button
            content={language}
            handleClick={changeLanguage}
          />
          <MusicButton />
        </div>
      </div>
      <p className="text-[10px] font-light mt-5 mb-0">© 2022 Duo Milonga</p>
    </footer>
  );
};

export default Footer;
