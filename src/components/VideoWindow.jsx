import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import { SlControlPlay } from "react-icons/sl";
import Modal from "./Modal";

const VideoWindow = () => {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <>
      <div
        className="group relative w-full h-60 transition duration-200 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <Button
          content={<SlControlPlay className=" ml-1 group-hover:brightness-125" />}
          className='absolute'
        />
        <StaticImage
          src="../assets/images/thumbnails/tn1.jpg"
          // dodac dynamic Image
          alt="video thumbnail"
          className="absolute group-hover:scale-105 top-0 left-0 w-full h-full transition duration-200 hover:scale-105 -z-10 brightness-110"
        />
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default VideoWindow;
