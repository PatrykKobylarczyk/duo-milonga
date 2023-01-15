import React from "react";

//LIBS
import { motion } from "framer-motion";

//COMPONENTS
import Thumbnail from "./Thumbnail";

const GalleryRow = ({ setShowModal, data, handleImageModal }) => {
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="grid place-items-center grid-cols-3 gap-2 sm:gap-5 overflow-y-hidden">
      {data.allFile.edges.map((image, i) => (
        <motion.div
          key={i}
          variants={item}
          onClick={() =>
            handleImageModal(image.node.childImageSharp.gatsbyImageData, i)
          }
        >
          <Thumbnail
            image={image.node.childImageSharp.gatsbyImageData}
            setShowModal={setShowModal}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryRow;
