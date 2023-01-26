import React from "react";

// HOOKS
import useMediaQuery from "../../hooks/useMediaQuery";

//COMPONENTS
import AudioSpectrumBar from "./AudioSpectrumBar";

const AudioSpectrumAnimation = ({ IsMusicInPlayer }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const width = isAboveMediumScreens ? 320 : 200;

  let bars = [];

  for (let i = 1; i < width / 4; i++) {
    bars.push(<AudioSpectrumBar key={i} IsMusicInPlayer={IsMusicInPlayer} />);
  }

  return (
    <div
      className={`flex items-end h-[110px] md:h-[200px] w-[200px] md:w-[320px] gap-[2px] ${IsMusicInPlayer ? null : 'opacity-0'}`}
    >
      {bars}
    </div>
  );
};

export default AudioSpectrumAnimation;
