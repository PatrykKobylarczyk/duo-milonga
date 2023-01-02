import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

// COMPONENTS
import { SlControlPlay } from "react-icons/sl";
import Button from "../components/Button";
import Modal from "./Modal";

const VideoWindow = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="overflow-hidden">
      <div  
        className="group relative grid place-items-center w-full  transition duration-200 hover:scale-[1.02] cursor-pointer z-10"
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
          className="group-hover:scale-[1.02] w-full transition duration-200 -z-10 brightness-110"
        />
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default VideoWindow;
