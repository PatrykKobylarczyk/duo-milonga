import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../components/Button";

const ImageCarousel = ({ currentImage, setShowModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen grid place-items-center bg-black/80 z-[500]">
      <div className="absolute top-5 right-5 z-[800] text-white">
        <Button content={"x"} handleClick={() => setShowModal(false)} />
      </div>
      <div className="w-full sm:w-[70%] sm:h-[80vh] object-cover">
        <GatsbyImage
          image={currentImage}
          alt="gallery"
          className="h-auto max-h-full"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
