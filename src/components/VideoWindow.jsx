import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import { SlControlPlay } from "react-icons/sl";
import Modal from "./Modal";

const VideoWindow = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal)
  return (

    
    <>
      <div
        className="relative w-full h-60 border transition duration-200"
        onClick={() => setShowModal(true)}
      >
        <StaticImage
          src="../assets/images/thumbnails/tn1.jpg"
          // dodac dynamic Image
          alt="video thumbnail"
          className="absolute top-0 left-0 w-full h-full transition duration-200 hover:scale-125 z-10"
        />
        <Button
          content={<SlControlPlay className="ml-1" />}
          className="absolute z-50 top-0 left-0  -translate-y-1/2"
        />
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default VideoWindow;
