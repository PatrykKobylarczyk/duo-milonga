import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

//COMPONENTS
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ActiveSelectorsGroup from "../components/ActiveSelectorsGroup";

const IndexPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Layout
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
    >
      <main>
       
        <div></div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
