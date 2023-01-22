import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Thumbnail = ({ image, setShowModal }) => {

  return (
    <button
      className="w-full h-32 xs:h-44 sm:h-60 md:h-80 lg:h-96  transition duration-200 ease-out md:hover:scale-[1.02] cursor-pointer z-10"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <GatsbyImage
        image={image}
        alt="Duo milonga"
        className="h-full"
        imgStyle={{
          objectFit: "cover",
          objectPosition: "50% 20%",
        }}
      />
    </button>
  );
};

export default Thumbnail;
