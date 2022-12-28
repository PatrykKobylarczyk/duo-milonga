import React from "react";

const AudioSpectrumBar = ({ isPlaying }) => {
  return (
    <span
      className={`audio-spectrum-bar ${
        isPlaying ? "on" : null
      } block w-[2px] h-[1px] bg-red`}
    ></span>
  );
};

export default AudioSpectrumBar;
