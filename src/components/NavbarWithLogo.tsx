
import React from "react";
import Navbar from "./Navbar";
import SingularityLogo from "./SingularityLogo";
import { Link } from "react-router-dom";

const NavbarWithLogo = () => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <SingularityLogo width={40} height={40} />
          <span className="font-bold text-xl hidden sm:inline-block">Singularity</span>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default NavbarWithLogo;
