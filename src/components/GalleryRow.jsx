import React from "react";

//COMPONENTS
import Thumbnail from "./Thumbnail";

const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
];

const GalleryRow = ({ setShowModal }) => {
  return (
    <div className="absolute top-0 left-0 right-0 max-w-[80%] grid m-auto grid-cols-1 sm:grid-cols-2 gap-10 scrollbar-hide md:p-40 pt-40 md:pt-60 overflow-y-scroll">
      {images.map((image, i) => (
        <Thumbnail key={i} image={image} setShowModal={setShowModal} />
      ))}
    </div>
  );
};

export default GalleryRow;
