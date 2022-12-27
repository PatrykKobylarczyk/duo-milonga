import React, { useEffect, useState, useRef } from "react";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

// LIBS
import AudioSpectrum from "react-audio-spectrum";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

// COMPONENTS
import Button from "./Button";
import MusicButtonAudioSpectrum from "./MusicButtonAudioSpectrum";

// STATE
import { useRecoilState } from "recoil";
import {
  currentSongState,
  currentSongIndex,
  mediumClicked,
} from "../atoms/atom";

// DATA
import { musicData } from "../data/musicData";
import night from "../assets/audio/majkusiak_night.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentSongIndex);
  const [currentSong, setCurrentSong] = useRecoilState(currentSongState);
  const [isMediumClicked, SetMediumClicked] = useRecoilState(mediumClicked);
  const [isPlaying, setIsPlaying] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [audioProgress, setAudioProgress] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");

  //PLAY AND PAUSE MUSIC
  useEffect(() => {
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  const setSongFromList = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const nextSong = () => {
    if (currentIndex + 1 < musicData.length) {
      setCurrentIndex(currentIndex + 1);
      setCurrentSong(musicData[currentIndex + 1]);
    }
  };

  const prevSong = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentSong(musicData[currentIndex - 1]);
    }
  };

  useEffect(() => {
    console.log(audioRef);
  }, []);

  // CONTROL TIME FOR PROGRESS BAR
  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(audioRef.current.duration / 60);
    let seconds = Math.floor(audioRef.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(audioRef.current.currentTime / 60);
    let currentSec = Math.floor(audioRef.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    audioRef.current.currentTime =
      (e.target.value * audioRef.current.duration) / 100;
  };

  return (
    <div className="w-[280px] h-auto md:w-[800px] z-50">
      <div className="relative flex flex-col w-full bg-black/50 pt-5 md:pt-15 px-3 rounded-md">
        {/* CLOSE MUSICPLAYER BUTTON */}
        <button
          className="absolute top-2 right-2 z-50"
          onClick={() => SetMediumClicked(false)}
        >
          back
        </button>

        {/* SONG TITLE */}
        <h1 className="absolute top-0 left-0 h-full w-full grid place-items-center text-2xl lg:text-4xl font-black -translate-y-5 md:translate-y-0">
          {musicData[currentIndex].title}
        </h1>

        {/* AUDIO AND AUDIOSPECTRUM */}
        <div className="w-full h-auto grid place-items-center">
          <audio
            ref={audioRef}
            id="audio-element"
            src={night}
            onTimeUpdate={handleAudioUpdate}
            onEnded={nextSong}
          />
          {/* <AudioSpectrum
            id="audio-canvas"
            height={isAboveMediumScreens ? 200 : 110}
            width={isAboveMediumScreens ? 320 : 200}
            audioId={"audio-element"}
            capColor={"#af2723"}
            capHeight={2}
            meterWidth={2}
            meterCount={512}
            meterColor={[
              { stop: 0, color: "#f00" },
              { stop: 0.6, color: "#0e879c" },
              { stop: 1, color: "red" },
            ]}
            gap={4}
          /> */}
        </div>

        {/* CONTROL PANEL */}
        <div className="grid place-items-center z-40">
          <div className="flex gap-5 py-5 md:py-8 items-center">
            <button className="button w-10 h-10 " onClick={prevSong}>
              <RxTrackPrevious size={"12px"} />
            </button>

            <Button
              handleClick={() => setIsPlaying((prev) => !prev)}
              content={<MusicButtonAudioSpectrum isPlaying={isPlaying} />}
            />
            <button className="button w-10 h-10 " onClick={nextSong}>
              <RxTrackNext size={"12px"} />
            </button>
          </div>
        </div>

        {/* PROGRESSBAR */}
        <input
          type="range"
          value={audioProgress}
          className=" w-full z-40"
          onChange={handleMusicProgressBar}
        />
      </div>

      {/* SONG LIST */}
      <ul className="w-full h-auto flex flex-col gap-1 lg:gap-3 mt-3">
        {musicData.map((song, index) => (
          <li
            className="bg-black/50 px-8 py-3 lg:py-5 rounded-md cursor-pointer"
            key={song.title}
            onClick={() => setSongFromList(song, index)}
          >
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;
