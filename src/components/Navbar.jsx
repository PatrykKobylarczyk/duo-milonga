import React, { useState } from "react";
import Logo from "./Logo";
import { Squeeze as Hamburger } from "hamburger-react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

const Navbar = ({ isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const menuListAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delay: 0.3,
      },
    },
  };

  const projectVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative">
      <header>
        <Logo color="white" />

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.div
            className="hovered-link flex justify-between gap-16 font-opensans text-sm font-semibold text-white"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={menuListAnimation}
          >
            <motion.div
              transition={{ duration: 0.15 }}
              variants={projectVariant}
            >
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              transition={{ duration: 0.15 }}
              variants={projectVariant}
            >
              <Link to="/about">About</Link>
            </motion.div>
            <motion.div
              transition={{ duration: 0.15 }}
              variants={projectVariant}
            >
              <Link to="/media">Media</Link>
            </motion.div>
            <motion.div
              transition={{ duration: 0.15 }}
              variants={projectVariant}
            >
              <Link to="/contact">Contact</Link>
            </motion.div>
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
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            {/* MENU ITEMS */}
            <AnimatePresence>
              <motion.div
                className="hovered-link w-full h-full flex flex-col gap-6 items-center justify-center text-xl text-white"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                variants={menuListAnimation}
              >
                <motion.div
                  transition={{ duration: 0.1 }}
                  variants={projectVariant}
                >
                  <Link to="/">Home</Link>
                </motion.div>
                <motion.div
                  transition={{ duration: 0.1 }}
                  variants={projectVariant}
                >
                  <Link to="/about">About</Link>
                </motion.div>
                <motion.div
                  transition={{ duration: 0.1 }}
                  variants={projectVariant}
                >
                  <Link to="/media">Media</Link>
                </motion.div>
                <motion.div
                  transition={{ duration: 0.1 }}
                  variants={projectVariant}
                >
                  <Link to="/contact">Contact</Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
