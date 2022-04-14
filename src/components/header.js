import React from "react";
import { Link } from "gatsby";

import Button from "./button";
import Logo from "../images/logos/logo-dark.svg";

const Header = () => {
  return (
    <header className="relative">
      <div className="container mx-auto">
        <div className="flex py-6 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-4">
            <Button link="/" label="Get Early Access" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
