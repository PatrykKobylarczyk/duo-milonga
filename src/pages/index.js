import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";

//COMPONENTS
import Layout from "../components/Layout";
import Cursor from "../components/Cursor";

const IndexPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-layout">
      <Layout
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      >
        {/* {isAboveSmallScreens ? <Cursor isHovered={isHovered}/> : <Cursor isAboveSmallScreens={isAboveSmallScreens}/>} */}

        <main>
          <StaticImage
            src="../images/Duo/11.jpg"
            alt="main room"
            className="h-full left-0 -z-50"
            objectPosition='32% 0'
          />
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Duo Milonga - Home</title>;
