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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 scrollbar-hide md:p-40 overflow-y-scroll">
      {images.map((image, i) => (
        <Thumbnail key={i} image={image} setShowModal={setShowModal} />
      ))}
    </div>
  );
};

export default GalleryRow;
