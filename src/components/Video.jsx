import React from "react";

// COMPONENTS
import VideoWindow from "./VideoWindow";

// DATA
import { videoData } from "../data/videoData";

const Video = () => {
  return (
    <div className="absoulte top-0 right-0 w-screen md:w-4/5 h-screen grid place-items-center  grid-cols-1  md:grid-cols-2 overflow-x-auto px-10 lg:px-12 pt-60 pb-40 lg:py-40 gap-10 scroll">
      {videoData.map((video) => (
        <VideoWindow key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Video;
