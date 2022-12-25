import React, { useState, useEffect, useRef } from "react";
import MusicButtonAudioSpectrum from "./MusicButtonAudioSpectrum";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import { useRecoilState } from "recoil";
import {
  currentSongState,
  currentSongIndex,
  languageState,
} from "../atoms/atom";
import useMediaQuery from "../hooks/useMediaQuery";
import audio from "../assets/audio/salwinski_milonga.mp3";

const Footer = () => {
  const audioRef = useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [language, setLanguage] = useRecoilState(languageState);
  const [currentSong] = useRecoilState(currentSongState);
  const [isPlaying, setIsplaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentSongIndex);

  const changeLanguage = () => {
    setLanguage(language === "PL" ? "EN" : "PL");
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

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
          <audio
            ref={audioRef}
            id="audio-element"
            src={audio}
          />
          <Button
            handleClick={() => setIsplaying((prev) => !prev)}
            content={
              <MusicButtonAudioSpectrum type="footer" isPlaying={isPlaying} />
            }
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
