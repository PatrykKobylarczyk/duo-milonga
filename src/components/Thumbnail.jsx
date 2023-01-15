import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useRecoilState } from "recoil";
import { modalState, imageState } from "../atoms/atom";

const Thumbnail = ({ image, setShowModal }) => {
  
  // const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentImage, setCurrentImage] = useRecoilState(imageState);

  return (
    <div
      className="w-full h-32 xs:h-44 sm:h-60 md:h-80 lg:h-96  transition duration-200 ease-out md:hover:scale-[1.02] cursor-pointer z-10"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <GatsbyImage
        image={image}
        alt='Duo milonga'
        className="h-full"
        imgStyle={{
          objectFit: "cover",
          objectPosition: "50% 20%",
        }}
      />
    </div>
  );
};

export default Thumbnail;
