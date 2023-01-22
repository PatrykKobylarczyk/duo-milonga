import React, { useState } from "react";

//COMPONENTS
import Button from "../components/Button";
import { MdClose } from "react-icons/md";

//LIBS
import ReactPlayer from "react-player/lazy";

// STATE
import { useRecoilState } from "recoil";
import { currentVideoIndex } from "../atoms/atom";

// DATA
import { videoData } from "../data/videoData";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const VideoModal = ({ setShowModal }) => {
  const [muted] = useState(false);
  const [videoIndex] = useRecoilState(currentVideoIndex);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className="pages fixed top-0 left-0 w-full h-screen grid place-items-center bg-black/95 z-[500]">
      {!isAboveSmallScreens && (
        <div className="absolute scale-75 bottom-2 left-1/2 -translate-x-1/2 z-[800] text-lg opacity-60 hover:opacity-90 transition duration-200">
          <Button
            content={<MdClose />}
            handleClick={() => setShowModal(false)}
          />
        </div>
      )}
      {isAboveSmallScreens && (
        <div className="absolute sm:flex sm:justify-end sm:scale-100 sm:top-10 sm:right-[5%] z-[800] text-lg opacity-60 hover:opacity-90 transition duration-200">
          <Button
            content={<MdClose />}
            handleClick={() => setShowModal(false)}
          />
        </div>
      )}

      <div className="w-full sm:w-[75vw] h-auto">
        <div className="relative pt-[56.25%] w-full mx-auto">
          {/* From React-Player-Documentation - padding-top: 56.25% - Player ratio: 100 / (1280 / 720) */}
          <ReactPlayer
            url={videoData[videoIndex].url}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
            playing
            playsInline
            muted={muted}
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
