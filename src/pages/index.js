import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";
import { RecoilRoot, useRecoilState } from "recoil";

//COMPONENTS
import { AnimatePresence, motion } from "framer-motion";
// import Cursor from "../components/Cursor";

const IndexPage = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pages relative h-screen">
      {/* {isAboveSmallScreens ? <Cursor isHovered={isHovered}/> : <Cursor isAboveSmallScreens={isAboveSmallScreens}/>} */}
      <main>
        <StaticImage
          src="../assets/images/Duo/11.jpg"
          alt="main room"
          className="h-full left-0 -z-50"
          objectPosition="32% 0"
        />
      </main>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout"></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Duo Milonga - Home</title>;
