import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const IndexPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className="pages relative h-screen">
      <main>
        {isAboveSmallScreens ? (
          <StaticImage
            src="../assets/images/6-_B2A3836-1popr.jpg"
            alt="main room"
            className=" h-full left-0 -z-50"
            objectPosition="32% 30%"
            cropFocus="attention"
          />
        ) : (
          <StaticImage
            src="../assets/images/Bez nazwy-1.jpg"
            alt="main room"
            className="w-full left-0 -z-50"
            // objectPosition="32% 30%"
            objectFit="cover"
          />
        )}
      </main>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout"></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Duo Milonga - Home</title>;
