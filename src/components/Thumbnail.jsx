import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useRecoilState } from "recoil";
import { modalState, imageState } from "../atoms/atom";

const Thumbnail = ({ image, setShowModal }) => {
  
  // const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentImage, setCurrentImage] = useRecoilState(imageState);

  return (
    <div
      className="w-full transition duration-200 ease-out md:hover:scale-[1.02] cursor-pointer z-10"
      onClick={() => {
        setCurrentImage(image);
        setShowModal(true);
      }}
    >
      <GatsbyImage
        image={image}
        alt='Duo milonga'
        className="object-cover"
      />
    </div>
  );
};

export default Thumbnail;
