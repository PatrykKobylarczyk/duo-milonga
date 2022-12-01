import React, { useState, useEffect } from "react";
import audio from "../audio/music2.mp3";

const useAudio = (url) => {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((prev) => !prev);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MusicButton = () => {
  const [playing, toggle] = useAudio(audio);

  const togglePlay = () => {
    toggle();
  };

  return (
    <button className="button text-xs" onClick={() => togglePlay()}>
      <div className="play-music">
        <div className={`music-animation ${playing ? "on" : null}`}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
          <span className="bar bar5"></span>
        </div>
        <audio className="music" loop="loop" src="./music/music2.mp3"></audio>
      </div>
    </button>
  );
};

export default MusicButton;
