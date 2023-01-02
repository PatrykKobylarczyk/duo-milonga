import React from "react";

//LIBS
import { motion } from "framer-motion";

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

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  
  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-8 overflow-y-scroll scrollbar-hide ">
      {images.map((image, i) => (
        <motion.div key={image.i} variants={item}>
          <Thumbnail key={i} image={image} setShowModal={setShowModal} />
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryRow;
