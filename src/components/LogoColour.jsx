import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const LogoColour = () => {
  return (
    <StaticImage
            src="../assets/images/tango_logo.png"
            alt="logo Colours of tango"
            className="w-[70px] mt-2"

          />
  );
};

export default LogoColour;
