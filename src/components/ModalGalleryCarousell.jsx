import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdWest, MdEast, MdClose } from "react-icons/md";
//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@mui/material";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const ModalGalleryCarousell = ({
  data,
  currentIndex,
  setShowModal
}) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const images = data.allFile.edges;

  const displayCarouselSection = images.map((image, i) => (
    <div key={i}>
      <GatsbyImage
        image={image.node.childImageSharp.gatsbyImageData}
        alt="gallery"
        className="w-auto max-h-full"
        imgStyle={{
          objectFit: "contain",
          objectPosition: "50% 50%",
        }}
      />
    </div>
  ));

  console.log(images)


  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/80 z-[500]"
      // onClick={() => setShowModal(false)}
    >
      <div className="relative sm:max-w-[90%] sm:h-[90vh] flex items-center gap-10">
        <div className="absolute scale-75 sm:top-0 sm:right-0 z-[800] text-white text-sm opacity-40 hover:opacity-80 transition duration-200">
          <Button
            content={<MdClose />}
            handleClick={() => setShowModal(false)}
          />
        </div>
        {/* {isAboveMediumScreens && (
          <div className="text-white scale-75 opacity-40 hover:opacity-80 transition duration-200">
            <Button
              content={<MdWest />}
              styles={`text-sm font-light text-white ${
                currentIndex === 0 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => handleGalleryNavigation("prev")}
            />
          </div>
        )} */}
      <Slider {...settings}>{displayCarouselSection}</Slider>
      {/* {isAboveMediumScreens && (
          <div className="text-white scale-75 opacity-40 hover:opacity-80 transition duration-200">
            <Button
              content={<MdEast />}
              styles={`text-sm font-light ${
                currentIndex === 24 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => handleGalleryNavigation("next")}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ModalGalleryCarousell;
