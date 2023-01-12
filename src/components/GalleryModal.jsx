import React from "react";

const GalleryModal = ({ children, setShowModal }) => {
  return (
    <div
      className="fixed w-full h-screen grid place-content-center bg-black/80 z-[500]"
      onClick={() => setShowModal(false)}
    >
      {children}
    </div>
  );
};

export default GalleryModal;
