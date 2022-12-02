import React, { useState } from "react";
import Logo from "./Logo";
import { Squeeze as Hamburger } from "hamburger-react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");


  const activeLinkStyle = 'color'

  return (
    <div className="relative">
      <header>
        <Logo color="white" />

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.div
            className="hovered-link flex justify-between gap-16 font-opensans text-sm font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/media">Media</Link>
            <Link to="/contact">Contact</Link>
          </motion.div>
        ) : (
          <Hamburger
            toggled={isMenuToggled}
            toggle={() => setIsMenuToggled((prev) => !prev)}
            size={17}
            color="white"
          />
        )}
      </header>
      {/* MOBILE MENU POPUP */}
      <AnimatePresence>
        {!isAboveSmallScreens && isMenuToggled && (
          <motion.div
            className="fixed right-0 top-0 h-full bg-[#141414] text-white w-full z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {/* MENU ITEMS */}
            <motion.div className="hovered-link w-full h-full flex flex-col gap-6 items-center justify-center text-xl text-white">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/media">Media</Link>
              <Link to="/contact">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
