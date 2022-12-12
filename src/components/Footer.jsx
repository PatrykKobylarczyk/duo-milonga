import React from "react";
import MusicButton from "./MusicButton";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language, setLanguage] = useRecoilState(languageState);

  const changeLanguage = () => {
    setLanguage(language === "PL" ? "EN" : "PL");
  };

  return (
    <footer>
      <div className="flex justify-between items-center">
        <div className="max-h-12 flex flex-col">
          <SocialMedia />
          {isAboveSmallScreens ? null : (
            <p className="text-[10px] font-light mt-5 mb-0">
              © 2022 Duo Milonga
            </p>
          )}
        </div>
        <div className="flex gap-5">
          <Button content={language} handleClick={changeLanguage} />
          <MusicButton />
        </div>
      </div>
      {isAboveSmallScreens ? (
        <p className="text-[10px] font-light mt-5 mb-0">© 2022 Duo Milonga</p>
      ) : null}
    </footer>
  );
};

export default Footer;
