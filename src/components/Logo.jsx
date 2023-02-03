import React from "react";
import { Link } from "gatsby";

const Logo = ({ color }) => {
  return (
    <Link to="/">
      <p
        className={`font-monteCarlo text-${color} text-3xl pl-2 z-50 font-semibold`}
      >
        duo
        <span className="font-Quicksand text-red font-normal text-2xl ml-1">milonga</span>
      </p>
    </Link>
  );
};

export default Logo;
