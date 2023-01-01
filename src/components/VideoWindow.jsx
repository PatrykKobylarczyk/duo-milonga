import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

// COMPONENTS
import { SlControlPlay } from "react-icons/sl";
import Button from "../components/Button";
import Modal from "./Modal";

const VideoWindow = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div  
        className="group relative grid place-items-center w-full h-full lg:h-80 transition duration-200 cursor-pointer z-20"
        onClick={() => setShowModal(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            content={
              <SlControlPlay className=" ml-1 text-white" />
            }
          />
        </div>
        <StaticImage
          src="http://i3.ytimg.com/vi/7xobYV9D1xo/hqdefault.jpg"
          // dodac dynamic Image
          alt="video thumbnail"
          className="group-hover:scale-[1.02] top-0 left-0 w-full max-w-[500px] h-full transition duration-200 hover:scale-105 -z-10 brightness-110"
        />
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default VideoWindow;
