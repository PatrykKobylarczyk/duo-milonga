import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

//COMPONENTS
import Head from "../components/Head";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const NotFoundPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className="pages relative h-screen">
      <main>
        {isAboveSmallScreens ? (
          <StaticImage
            src="../assets/images/06-_B2A3836-1popr.jpg"
            alt="main room"
            className=" h-full -z-50"
            objectPosition="32% 30%"
            cropFocus="attention"
          />
        ) : (
          <StaticImage
            src="../assets/images/Bez nazwy-1.jpg"
            alt="main room"
            className="h-full -z-50"
            objectFit="cover"
          />
        )}
      </main>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-layout"></div>
      <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        You just hit a route that doesn&#39;t exist... the sadness.
      </h3>
      <Head title="Not found" />
    </div>
  );
};

export default NotFoundPage;
