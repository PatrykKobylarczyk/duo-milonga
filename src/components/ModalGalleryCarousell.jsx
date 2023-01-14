import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

//CAROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@mui/material";

const ModalGalleryCarousell = ({
  data,
  currentIndex,
  setShowModal
}) => {
  const images = data.allFile.edges;

  const displayCarouselSection = images.map((image, i) => (
    <div key={i}>
      <GatsbyImage
        image={image.node.childImageSharp.gatsbyImageData}
        alt="gallery"
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
      {/* <Button /> */}
      <Slider {...settings}>{displayCarouselSection}</Slider>
    </div>
  );
};

export default ModalGalleryCarousell;
