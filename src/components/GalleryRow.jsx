import React from "react";

//LIBS
import { motion } from "framer-motion";

//COMPONENTS
import Thumbnail from "./Thumbnail";


const GalleryRow = ({ setShowModal, data }) => {
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 gap-8 overflow-y-scroll scrollbar-hide ">
      {data.allFile.edges.map((image, i) => (
        <motion.div key={i} variants={item}>
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
