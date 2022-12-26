import React from "react";

// LIBS
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            ease: [0.435, 0.135, 0.09, 0.83],
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
