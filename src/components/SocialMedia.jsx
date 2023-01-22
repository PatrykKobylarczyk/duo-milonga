import React from "react";

// COMPONENTS
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandSoundcloud } from "react-icons/tb";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://www.facebook.com/search/top?q=duo%20milonga"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF className="w-4 h-4 transition duration-200 hover:text-red hover:-translate-y-1" />
      </a>
      <a
        href="https://www.instagram.com/duo.milonga/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="w-4 h-4 transition duration-200 hover:text-red hover:-translate-y-1" />
      </a>
      <a
        href="https://soundcloud.com/duomilonga?fbclid=IwAR1W4-oGThjv5_SctemkAKcMFE-QUwHE0RYkjSMMzQH4VCv3xsOw5ffqLS4"
        target="_blank"
        rel="noreferrer"
      >
        <TbBrandSoundcloud className="w-6 h-6 transition duration-200 hover:text-red hover:-translate-y-1" />
      </a>
    </div>
  );
};

export default SocialMedia;
