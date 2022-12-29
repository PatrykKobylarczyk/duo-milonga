import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// COMPONENTS
import VideoWindow from "../components/VideoWindow";

// DATA
import { videoData } from "../data/videoData";

const video = () => {
  return (
    <div className="relative w-full flex flex-col items-center pb-32">
      <div className="fixed left-0 top-0 w-full h-screen bg-gradient-layout-darker"></div>
      <h1 className="my-40 text-3xl md:text-6xl md:translate-y-16 text-white z-[7]">Videos</h1>
      <StaticImage
        src="../assets/images/Duo/04.jpg"
        alt="main room"
        className="h-screen fixed left-0 top-0 -z-[2]"
        objectPosition=" 65% 0"
      />
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-30 px-5 lg:p-20">
        {videoData.map((video) => (
          <VideoWindow key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default video;
