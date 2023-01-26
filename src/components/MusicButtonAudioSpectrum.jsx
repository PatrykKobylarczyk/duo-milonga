import React from "react";

// COMPONENTS
import { SlControlPlay } from "react-icons/sl";

const MusicButtonAudioSpectrum = ({
  isMusicInFooter,
  type,
  IsMusicInPlayer,
}) => {
  return (
    <div>
      {type === "footer" ? (
        isMusicInFooter ? (
          <div className="play-music">
            <div className={`music-animation ${isMusicInFooter ? "on" : null}`}>
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
              <span className="bar bar5"></span>
            </div>
          </div>
        ) : (
          <SlControlPlay className="ml-1" />
        )
      ) : IsMusicInPlayer ? (
        <div className="flex gap-1 mr-[1px]">
          <span className="w-[1px] h-3 bg-white"></span>
          <span className="w-[1px]  h-3 bg-white"></span>
        </div>
      ) : (
        <SlControlPlay className="ml-1" />
      )}
    </div>
  );
};

export default MusicButtonAudioSpectrum;
