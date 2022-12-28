import React from "react";

const AudioSpectrumBar = ({ isPlaying }) => {
  return (
    <span
      className={`audio-spectrum-bar ${
        isPlaying ? "on" : null
      } block w-2 h-[4px]  bg-[#f00] `}
    ></span>
  );
};

export default AudioSpectrumBar;
