import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Media = () => {
  return (
    <div className="page h-screen grid place-items-center">
      <StaticImage
        src="../assets/images/Duo/01.jpg"
        alt="main room"
        className="h-full left-0 z-0"
        objectPosition="32% 0"
      />
      <div className="absolute left-0 top-0 w-full h-full "></div>
    </div>
  );
};

export default Media;
