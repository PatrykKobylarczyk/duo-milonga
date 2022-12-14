import React, { useState } from "react";
import Modal from "./Modal";

const Video = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className=" relative w-full lg:w-2/3 h-full grid place-items-center">

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default Video;
