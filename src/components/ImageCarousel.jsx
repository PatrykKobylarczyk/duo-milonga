import React, { useRef } from "react";
import { MdWest, MdEast, MdClose } from "react-icons/md";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./Button";

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const ImageCarousel2 = ({
  setShowModal,
  currentIndex,
  setCurrentIndex,
  data,
}) => {
  const slider = React.useRef(null);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const displayCarouselSection = data.allFile.edges.map((image) => (
    <div className="w-full h-screen flex justify-center align-center">
      <GatsbyImage
        key={image.id}
        image={image.node.childImageSharp.gatsbyImageData}
        alt={"Duo milonga"}
        className="w-full h-full"
        imgStyle={{
          objectFit: "contain",
          objectPosition: "50% 50%",
        }}
      />
    </div>
  ));

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "w-full sm:w-[90vw] h-full",
    initialSlide: currentIndex,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="pages fixed top-0 left-0 w-full h-screen flex items-center justify-center ali gap-10 bg-black/95 z-[500]">
      {isAboveSmallScreens && (
        <div className="absolute scale-75 top-0 right-0 z-[800] text-white text-sm opacity-40 hover:opacity-80 transition duration-200">
          <Button
            content={<MdClose />}
            handleClick={() => setShowModal(false)}
          />
        </div>
      )}
      {isAboveSmallScreens && (
        <Button
          content={<MdWest />}
          handleClick={() => slider?.current?.slickPrev()}
        />
      )}
      <Slider ref={slider} {...settings}>
        {displayCarouselSection}
      </Slider>
      {isAboveSmallScreens && (
        <Button
          content={<MdEast />}
          handleClick={() => slider?.current?.slickNext()}
        />
      )}
      {!isAboveSmallScreens && (
        <div className="absolute flex gap-2 bottom-2">
          <div className="text-white scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdWest />}
              styles={`text-lg font-light text-white ${
                currentIndex === 0 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => slider?.current?.slickPrev()}
            />
          </div>
          <div className="scale-75 z-[800] text-white text-sm opacity-60 sm:opacity-40 hover:opacity-90 transition duration-200">
            <Button
              content={<MdClose size={"17px"} />}
              handleClick={() => setShowModal(false)}
            />
          </div>
          <div className="text-white scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdEast />}
              styles={`text-lg font-light ${
                currentIndex === 24 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => slider?.current?.slickNext()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel2;
