import { Link } from "gatsby";
import React from "react";

const Logo = () => {
  return (
    <Link to="/">
      <p className="font-monteCarlo text-black text-3xl pl-2 z-50">
        duo
        <span className="font-Quicksand text-red text-2xl">milonga</span>
      </p>
    </Link>
  );
};

export default Logo;
