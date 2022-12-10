import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";

//COMPONENTS
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
// import Cursor from "../components/Cursor";

const IndexPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      {isLoading ? (
        <AnimatePresence initial={false}>
          <motion.div
            className="bg-[#141414] w-full h-screen flex justify-center items-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              ease: [0.435, 0.135, 0.09, 0.83],
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
          >
            <h1 className="text-white text-4xl">is loading</h1>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="pages relative h-screen">
          <Layout
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          >
            {/* {isAboveSmallScreens ? <Cursor isHovered={isHovered}/> : <Cursor isAboveSmallScreens={isAboveSmallScreens}/>} */}

            <main>
              <StaticImage
                src="../assets/images/Duo/11.jpg"
                alt="main room"
                className="h-full left-0 -z-50"
                objectPosition="32% 0"
              />
            </main>
          </Layout>
        </div>
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Duo Milonga - Home</title>;
