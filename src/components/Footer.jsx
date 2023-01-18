import React, { useState, useEffect, useRef } from "react";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// COMPONENTS
import MusicButtonAudioSpectrum from "./MusicButtonAudioSpectrum";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

// DATA
import audio from "../assets/audio/salwinski_milonga.mp3";

const Footer = () => {
  const audioRef = useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language, setLanguage] = useRecoilState(languageState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [langIsReady, setLangIsReady] = useState(false);

  const changeLanguage = () => {
    setLanguage(language === "PL" ? "EN" : "PL");
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Set initial language state because from local storage returns null
  useEffect(() => {
    if (!language) {
      setLanguage("PL");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

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
          <Button
            content={language}
            handleClick={changeLanguage}
            styles={"text-xs"}
          />
          <audio ref={audioRef} id="audio-element" src={audio} />

          {/* MUSIC BUTTON */}
          <Button
            handleClick={() => setIsPlaying((prev) => !prev)}
            content={
              <MusicButtonAudioSpectrum type="footer" isPlaying={isPlaying} />
            }
            styles={"text-xs"}
          />
        </div>
      </div>
      {isAboveSmallScreens ? (
        <p className="text-[10px] font-light mt-5 mb-0">© 2022 Duo Milonga</p>
      ) : null}
    </footer>
  );
};

export default Footer;
