import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ImageWindow = ({ currentImage }) => {
  return (
    <div className="w-full h-auto md:h-4/5 md:w-1/2">
      <GatsbyImage
        image={currentImage}
        alt="gallery"
        className="w-full h-hull"
      />
    </div>
  );
};

export default ImageWindow;
