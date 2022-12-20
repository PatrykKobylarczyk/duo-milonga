import React, { useState } from "react";

import VideoWindow from "./VideoWindow";
import { videoData } from "../data/videoData";

const Video = ({ SetMediumClicked }) => {
  

  return (
    <div className="absolute top-0 w-full lg:w-4/5 h-screen grid place-items-center  grid-cols-1 lg:grid-cols-3 overflow-x-auto px-10 lg:px-12  py-40 gap-10">
      {videoData.map((video) => (
        <VideoWindow key={video.id} video={video}/>
      ))}

      
    </div>
  );
};

export default Video;
