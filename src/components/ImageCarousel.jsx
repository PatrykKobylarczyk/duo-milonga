import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import { MdWest, MdEast, MdClose } from "react-icons/md";

// HOOKS
import useMediaQuery from "../hooks/useMediaQuery";

const ImageCarousel = ({
  setShowModal,
  currentIndex,
  setCurrentIndex,
  data,
}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const handleGalleryNavigation = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prev) => prev - 1);
    }
    if (direction === "next") {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen grid place-items-center bg-black/90 z-[500]">
      <div className="relative h-[80vh] sm:max-w-[90%] sm:h-[90vh] flex items-center gap-10">
        {isAboveMediumScreens && (
          <div className="absolute scale-75 top-0 right-0 z-[800] text-white text-sm opacity-40 hover:opacity-80 transition duration-200">
            <Button
              content={<MdClose />}
              handleClick={() => setShowModal(false)}
            />
          </div>
        )}
        {isAboveMediumScreens && (
          <div className="text-white scale-75 opacity-40 hover:opacity-80 transition duration-200">
            <Button
              content={<MdWest />}
              styles={`text-sm font-light text-white ${
                currentIndex === 0 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => handleGalleryNavigation("prev")}
            />
          </div>
        )}

        {/* <GatsbyImage
          image={
            data.allFile.edges[currentIndex].node.childImageSharp
              .gatsbyImageData
          }
          alt="gallery"
          className="w-auto max-h-full"
          imgStyle={{
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
        /> */}

        {isAboveMediumScreens && (
          <div className="text-white scale-75 opacity-40 hover:opacity-80 transition duration-200">
            <Button
              content={<MdEast />}
              styles={`text-sm font-light ${
                currentIndex === 24 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => handleGalleryNavigation("next")}
            />
          </div>
        )}
      </div>
      {!isAboveMediumScreens && (
        <div className="absolute flex gap-2 bottom-2">
          <div className="text-white scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdWest />}
              styles={`text-sm font-light text-white ${
                currentIndex === 0 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => handleGalleryNavigation("prev")}
            />
          </div>
          <div className="scale-75 z-[800] text-white text-sm opacity-60 sm:opacity-40 hover:opacity-90 transition duration-200">
            <Button
              content={<MdClose />}
              handleClick={() => setShowModal(false)}
            />
          </div>
          <div className="text-white scale-75 opacity-60 hover:opacity-90 transition duration-200">
            <Button
              content={<MdEast />}
              styles={`text-sm font-light ${
                currentIndex === 24 && "opacity-0 pointer-events-none"
              }`}
              handleClick={() => handleGalleryNavigation("next")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
