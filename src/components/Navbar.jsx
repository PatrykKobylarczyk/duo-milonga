import React, { useState } from "react";
import Logo from "./Logo";
import { Squeeze as Hamburger } from "hamburger-react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <motion.div>
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-red" : ""}
          hover:text-red transition duration-500`}
        to={`#${lowerCasePage}`}
        onClick={() => {
          setSelectedPage(lowerCasePage);
          setIsMenuToggled(false);
        }}
      >
        {page}
      </AnchorLink>
    </motion.div>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative">
      <header>
        <Logo color='black'/>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.div
            className="flex justify-between gap-16 font-opensans text-sm font-semibold"
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Media"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </motion.div>
        ) : (
          <Hamburger
            toggled={isMenuToggled}
            toggle={() => setIsMenuToggled((prev) => !prev)}
            size={20}
          />
        )}
      </header>
      {/* MOBILE MENU POPUP */}
      <AnimatePresence>
        {!isAboveSmallScreens && isMenuToggled && (
          <motion.div
            className="fixed right-0 top-0 h-4/5 bg-white w-full z-40"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            {/* MENU ITEMS */}
            <div className="w-full h-full flex flex-col gap-6 items-center justify-center text-xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Media"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
