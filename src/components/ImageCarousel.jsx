import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

//COMPONENTS
import { MdWest, MdEast, MdClose } from "react-icons/md";
import Button from "./Button";

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const ImageCarousel = ({ setShowModal, currentIndex, data }) => {
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
    className: "w-full sm:w-[83vw] h-full",
    initialSlide: currentIndex,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="pages fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/95 z-[500]">
      {isAboveSmallScreens && (
        <div className="opacity-40 hover:opacity-90 transition duration-200">
          <Button
            content={<MdWest />}
            handleClick={() => slider?.current?.slickPrev()}
          />
        </div>
      )}
      <Slider ref={slider} {...settings}>
        {displayCarouselSection}
      </Slider>
      <div className="relative h-full flex flex-col justify-center">
        {isAboveSmallScreens && (
          <div className="absolute top-10 right-0 z-[800] text-white text-lg opacity-40 hover:opacity-90 transition duration-200">
            <Button
              content={<MdClose />}
              handleClick={() => setShowModal(false)}
            />
          </div>
        )}
        {isAboveSmallScreens && (
          <div className="opacity-40 hover:opacity-90 transition duration-200">
            <Button
              content={<MdEast />}
              handleClick={() => slider?.current?.slickNext()}
            />
          </div>
        )}
      </div>

      {!isAboveSmallScreens && (
        <div className="absolute flex gap-2 bottom-2 text-white">
          <div className="scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdWest />}
              styles={`text-lg font-light`}
              handleClick={() => slider?.current?.slickPrev()}
            />
          </div>
          <div className="scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdClose size={"17px"} />}
              handleClick={() => setShowModal(false)}
            />
          </div>
          <div className="scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdEast />}
              styles={`text-lg font-light `}
              handleClick={() => slider?.current?.slickNext()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
