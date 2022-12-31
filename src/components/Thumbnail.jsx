import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useRecoilState } from "recoil";
import { modalState, imageState } from "../atoms/atom";

const Thumbnail = ({ image, setShowModal }) => {
  
  // const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentImage, setCurrentImage] = useRecoilState(imageState);

console.log(currentImage)

  return (
    <div
      className="w-full cursor-pointer transition duration-200 ease-out md:hover:scale-[1.02]"
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
