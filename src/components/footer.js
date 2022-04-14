import React from "react";

import Logomark from "../images/logos/logomark.svg";

const Footer = () => (
  <footer className="bg-neutral-900 text-white">
    <div className="container mx-auto">
      <div className="flex flex-col gap-6 pb-10">
        <div className="flex justify-center relative">
          <span className="absolute block h-px bg-white opacity-10 bottom-1/2 left-0 right-0"></span>
          <div className="bg-neutral-900 px-6 relative">
            <img src={Logomark} alt="Logomark" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:text-left gap-4 text-center">
          <p className="text-body-sm font-medium text-neutral-400">
            © ReigM {new Date().getFullYear()}. Made with love by{" "}
            <a
              className="text-primary-100"
              href="https://landify.design/?ref=regim">
              Landify
            </a>
          </p>
          <p className="text-body-sm font-medium text-neutral-400">
            For further details, drop a mail to{" "}
            <a className="text-primary-100" href="mailto:hello@landify.design">
              hello@landify.design
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
