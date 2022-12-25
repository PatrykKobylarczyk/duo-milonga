import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import MuiModal from "@mui/material/Modal";

const Modal = ({ showModal, setShowModal }) => {
  const [muted] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed h-3/4 !top-1/2 -translate-y-1/4 lg:-translate-y-1/2 left-0 right-0 z-30 mx-auto max-w-6xl min-h-3xl overflow-hidden lg:p-16"
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
