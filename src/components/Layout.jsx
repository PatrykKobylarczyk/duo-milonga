import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          initial={{ y:0 }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{
            ease: [0.435, 0.135, 0.09, 0.83],
            stiffness: 260,
            damping: 20,
            duration: .8,
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
