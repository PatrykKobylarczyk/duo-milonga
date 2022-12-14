import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { lang_EN } from "../data/lang-pack";
import { lang_PL } from "../data/lang-pack";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import Music from "../components/music";
import Gallery from "../components/Gallery";
import Video from "../components/Video";


const Media = () => {
  const [language] = useRecoilState(languageState);
  const lang = language === "PL" ? lang_EN : lang_PL;
  const [media, setMedia] = useState("Music");

let medium;
switch(media){
  case lang.menu_media_music:
    medium = <Music/>
    break;
    case lang.menu_media_video:
    medium = <Video/>
    break;
    case lang.menu_media_gallery:
    medium = <Gallery/>
    break;
}

  return (
    <div className="relative page h-screen">
      <StaticImage
        src="../assets/images/Duo/09.jpg"
        alt="main room"
        className="h-full absolute left-0 top-0 -z-50"
        objectPosition=" 65% 0"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout -z-50"></div>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-left-side -z-50"></div>
      <section className="flex">
        <div className="w-1/3 h-screen flex flex-col justify-center items-start pl-40 z-50 ">
          <ul className="text-lg flex flex-col gap-3">
            <li>
              <button onClick={() => setMedia(lang.menu_media_music)}>
                {lang.menu_media_music}
              </button>
            </li>
            <li>
              <button onClick={() => setMedia(lang.menu_media_video)}>
                {lang.menu_media_video}
              </button>
            </li>
            <li>
              <button onClick={() => setMedia(lang.menu_media_gallery)}>
                {lang.menu_media_gallery}
              </button>
            </li>
          </ul>
        </div>

        <div className="w-2/3 grid place-items-center">{medium}</div>
      </section>
    </div>
  );
};

export default Media;
