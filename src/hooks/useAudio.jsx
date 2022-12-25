import { useState, useEffect, useCallback } from "react";

const useAudio = (url) => {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((prev) => !prev);

  const playPauseMusic = useCallback(() => {
    playing ? audio.play() : audio.pause() ;
  }, [playing]);

  const endMusic = useCallback(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  useEffect(()=>{
    playPauseMusic();
    endMusic();
  },[playPauseMusic, endMusic])

  return [playing, toggle];
};

export default useAudio;
