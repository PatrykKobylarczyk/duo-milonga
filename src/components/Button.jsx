import React from "react";

const Button = ({ content, handleClick, styles }) => {
  return (
    <button
      className={`button text-xs ${styles}`}
      
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;
