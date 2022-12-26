import React from "react";

// COMPONENTS
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.facebook.com/search/top?q=duo%20milonga"
        target="_blank"
      >
        <FaFacebookF className="w-4 h-4 transition duration-200 hover:text-red hover:-translate-y-1" />
      </a>
      <a href="https://www.instagram.com/duo.milonga/" target="_blank">
        <BsInstagram className="w-4 h-4 transition duration-200 hover:text-red hover:-translate-y-1" />
      </a>
    </div>
  );
};

export default SocialMedia;
