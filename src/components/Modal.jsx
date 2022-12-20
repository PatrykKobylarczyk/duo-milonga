import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import ReactPlayer from "react-player/lazy";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { languageState, mediumClicked } from "../atoms/atom";

const Modal = ({ showModal, setShowModal }) => {
  const [muted, setMuted] = useState(false);
  const [isMediumClicked, SetMediumClicked] = useRecoilState(mediumClicked);

  const handleClose = () => {
    setShowModal(false);
    // SetMediumClicked(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-1/4 left-0 right-0 z-50 mx-auto w-full max-w-4xl h-full  overflow-hidden"
    >
      <div>
        <button
          onClick={handleClose}
          className="button absolute right-5 top-5 !z-40 h-9 w-9 border-none text-white hover:bg-[#181818]"
        >
          close
        </button>

        <div className="relative pt-[56.25%]">
          {/* From React-Player-Documentation - padding-top: 56.25% - Player ratio: 100 / (1280 / 720) */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_uk2qDTs5aI"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
            playing
            playsinline
            muted={muted}
            controls={true}
          />
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
