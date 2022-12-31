import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ImageWindow = () => {
  return (
    <div className="w-full h-auto md:h-4/5 md:w-1/2">
      <StaticImage
        src="../assets/images/Duo/03.jpg"
        alt="gallery"
        className="w-full h-hull"
      />
    </div>
  );
};

export default ImageWindow;
