import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {

  return (
    <div className="pages relative h-screen">
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
