import React from "react";

const AudioSpectrumBar = ({ IsMusicInPlayer }) => {
  return (
    <span
      className={`audio-spectrum-bar ${
        IsMusicInPlayer ? "on" : null
      } block w-[2px] h-[1px] bg-red`}
    ></span>
  );
};

export default AudioSpectrumBar;
