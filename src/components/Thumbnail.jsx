import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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
      <StaticImage
        src={`../assets/images/Duo/02.jpg`}
        alt=''
        className="object-cover"
        layout="constrained"
      />
    </div>
  );
};

export default Thumbnail;
