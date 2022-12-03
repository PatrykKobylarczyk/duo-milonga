import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useMediaQuery from "../hooks/useMediaQuery";

const Layout = ({ children }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
