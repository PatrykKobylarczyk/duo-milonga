import React from "react";
import audio from "../assets/audio/salwinski_milonga.mp3";
import useAudio from "../hooks/useAudio";
import { SlControlPlay } from "react-icons/sl";

const MusicButton = () => {
  const [playing, toggle] = useAudio(audio);

  const togglePlay = () => {
    toggle();
  };

  return (
    <button className="button h-14 w-14" onClick={() => togglePlay()}>
      {playing ? (
        <div className="play-music">
          <div className={`music-animation ${playing ? "on" : null}`}>
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
            <span className="bar bar5"></span>
          </div>
        </div>
      ) : (
        <SlControlPlay className="ml-1"/>
      )}
    </button>
  );
};

export default MusicButton;
