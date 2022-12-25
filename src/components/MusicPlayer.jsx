import React, { useEffect, useState, useRef } from "react";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { musicData } from "../data/musicData";
import Button from "./Button";
import MusicButtonAudioSpectrum from "./MusicButtonAudioSpectrum";
import AudioSpectrum from "react-audio-spectrum";
import { useRecoilState } from "recoil";
import { currentSongState, currentSongIndex } from "../atoms/atom";
import useMediaQuery from "../hooks/useMediaQuery";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useRecoilState(currentSongIndex);
  const [currentSong, setCurrentSong] = useRecoilState(currentSongState);
  const [isPlaying, setIsplaying] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    audioRef.current.load()
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

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

  return (
    <div className="w-[280px] h-auto md:w-[800px]">
      <div className="relative flex flex-col w-full bg-black/50 pt-10 rounded-md">
        <h1 className="absolute top-0 left-0 h-full w-full grid place-items-center text-2xl lg:text-4xl font-black -translate-y-3">
          {musicData[1].title}
        </h1>

        <div className="w-full h-auto grid place-items-center opacity-100">
          <audio
            ref={audioRef}
            id="audio-element"
            src={currentSong.path}
          />
          <AudioSpectrum
            id="audio-canvas"
            height={140}
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
          />
        </div>
        <div className="grid place-items-center z-40">
          <div className="flex gap-5 py-5 items-center">
            <button className="button w-10 h-10 " onClick={prevSong}>
              <RxTrackPrevious size={"12px"} />
            </button>
            <Button
              handleClick={() => setIsplaying((prev) => !prev)}
              content={<MusicButtonAudioSpectrum isPlaying={isPlaying} />}
            />
            <button className="button w-10 h-10 " onClick={nextSong}>
              <RxTrackNext size={"12px"} />
            </button>
          </div>
        </div>
        <input type="range" min={"0"} max={"100"} className=" w-full z-40" />
        
      </div>
      <ul className="w-full h-auto flex flex-col gap-1 mt-3">
        {musicData.map((song) => (
          <li className="bg-black/50 px-8 py-3 rounded-md" key={song.title}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;
