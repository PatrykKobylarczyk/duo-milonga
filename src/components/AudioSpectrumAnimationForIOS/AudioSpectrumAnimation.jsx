import React from "react";

// HOOKS
import useMediaQuery from "../../hooks/useMediaQuery";

//COMPONENTS
import AudioSpectrumBar from "./AudioSpectrumBar";

const AudioSpectrumAnimation = ({ isPlaying }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const width = isAboveMediumScreens ? 320 : 200;

  let bars = [];

  for (let i = 1; i < width / 4; i++) {
    bars.push(<AudioSpectrumBar key={i} isPlaying={isPlaying} />);
  }

  console.log(width);

  return (
    <div
      className={`flex items-end h-[110px] md:h-[200px] w-[200px] md:w-[320px] gap-[2px] ${isPlaying ? null : 'opacity-0'}`}
    >
      {bars}
    </div>
  );
};

export default AudioSpectrumAnimation;
