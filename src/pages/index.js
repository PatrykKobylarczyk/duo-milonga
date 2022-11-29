import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";

//COMPONENTS
import Layout from "../components/Layout";
import ActiveSelectorsGroup from "../components/ActiveSelectorsGroup";

const IndexPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
      <Layout
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      >
        <main>
          {/* Hero section */}

          <section className="section">
            <div>
              <StaticImage src="../images/Duo/01.jpg" alt="main room" />
            </div>
          </section>

          {/* About */}
          {/* Biographies */}
          {/* Video */}
          {/* Gallery */}
          {/* Music */}
          {/* Media */}
          {/* Contact */}
          {/* Shop */}
        </main>
      </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Duo Milonga - Home</title>;
