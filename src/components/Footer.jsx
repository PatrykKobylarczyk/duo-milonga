import React from "react";
import MusicButton from "./MusicButton";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center">
        <SocialMedia />
        <MusicButton />
      </div>
      <p className="text-xs font-light">© 2022 Duo Milonga</p>
    </footer>
  );
};

export default Footer;
