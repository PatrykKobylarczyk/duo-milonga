import React, { useState } from "react";

import VideoWindow from "./VideoWindow";
import { videoData } from "../data/videoData";

const Video = ({ SetMediumClicked }) => {
  

  return (
    <div className=" relative w-full lg:w-4/5 h-auto grid place-items-center  grid-cols-1 lg:grid-cols-3 overflow-x-auto lg:py-40 lg:px-12 gap-10 ">
      {videoData.map((video) => (
        <VideoWindow key={video.id} video={video}/>
      ))}

      
    </div>
  );
};

export default Video;
