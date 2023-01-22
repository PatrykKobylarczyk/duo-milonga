import React from "react";

// COMPONENTS
import { SlControlPlay } from "react-icons/sl";
import Button from "../components/Button";

// STATE
import { useRecoilState } from "recoil";
import { currentVideoIndex } from "../atoms/atom";

const VideoWindow = ({ setShowModal, title, thumbnail, id }) => {

  const [videoIndex, setVideoIndex] = useRecoilState(currentVideoIndex);

  const handleOpenModal = (id) => {
    setShowModal(true);
    setVideoIndex(id)
  };

  return (
    <div className="overflow-hidden">
      <button
        className="group relative grid place-items-center w-full h-full transition duration-200 hover:scale-[1.02] cursor-pointer z-10"
        onClick={() => handleOpenModal(id)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button content={<SlControlPlay className=" ml-1 text-white" />} />
        </div>
        <img src={thumbnail} alt={title} className="w-[120%] h-full" />
      </button>
    </div>
  );
};

export default VideoWindow;
