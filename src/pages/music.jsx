import React from "react";
import { StaticImage } from "gatsby-plugin-image";

//COMPONENTS
import MusicPlayer from "../components//MusicPlayer";

const music = () => {
  return (
    <div className="pages relative page h-screen">
      <div className="fixed left-0 top-0 w-full h-full  bg-gradient-layout z-[1]"></div>
      {/* <div className="fixed left-0 top-0 w-full h-full  bg-gradient-layout-darker z-[3]"></div> */}
      <StaticImage
        src="../assets/images/Duo/05.jpg"
        alt="main room"
        className="h-full fixed left-0 top-0 z-[2]"
        objectPosition=" 65% 0"
      />
      <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default music;
