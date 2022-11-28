import React, { useState } from "react";
import Logo from "./Logo";
import { Squeeze as Hamburger } from "hamburger-react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
          hover:text-yellow transition duration-500`}
      to={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <div className="z-40 w-full fixed top-0 py-6">
      <div className="flex justify-between items-center  mx-auto w-5/6">
        <Logo />
        <Hamburger
          toggled={isMenuToggled}
          toggle={setIsMenuToggled}
          size={20}
        />
      </div>
    </div>
  );
};

export default Navbar;
