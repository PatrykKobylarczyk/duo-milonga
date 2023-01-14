import React from "react";

const ModalGallery = ({ children, setShowModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen grid place-items-center bg-black/80 z-[500]"
      onClick={() => setShowModal(false)}
    >
      {children}
    </div>
  );
};

export default ModalGallery;
