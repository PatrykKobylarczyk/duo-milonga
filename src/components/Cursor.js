import React, { useState, useEffect, useRef } from "react";

const Cursor = ({ isHovered, isAboveSmallScreens }) => {
  const cursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseover", () => {
      setIsReady(true);
    });
    return () => {};
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - cursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - cursor.current.clientHeight / 2;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.5;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.5;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      cursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <div
      className={
        isAboveSmallScreens
          ? `fixed w-2 h-2 rounded-full z-[1000] bg-gray-100 mix-blend-difference
            transition duration-100 `
          : "display:none"
      }
      ref={cursor}
    ></div>
  );
};

export default Cursor;
