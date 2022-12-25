import React from "react";

const Button = ({ content, handleClick }) => {
  return (
    <button
      className={`button 
      h-14 w-14
      text-xs`}
      
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;

// h-${size ? size : "14"} w-${size ? size : "14"}}