import React from "react";

import Button from "./button";
import Header from "./header";
import Mockups from "../images/mockups.svg";

const Hero = () => (
  <div>
    <Header />
    <div>
      <div className="container mx-auto relative">
        <div className="md:w-[700px] md:h-[700px] w-[400px] h-[400px] rounded-full bg-secondary-100 absolute block lg:-right-40 md:-right-20 lg:-top-56 md:top-72 top-80 -right-14 -z-50"></div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 md:gap-y-16 gap-y-18 pt-8 pb-20 items-center relative border-b border-neutral-200">
          <div className="flex flex-col items-start gap-10 lg:col-span-6">
            <div className="flex flex-col gap-4 lg:pr-0 md:pr-24 relative">
              <h3 className="md:text-display-2xl text-display-md font-semibold">
                Event Registration Reimagined
              </h3>
              <p className="md:text-body-lg text-body-md font-normal text-neutral-700">
                Manage your event registrations hassle free and without any
                dependency with the technical team. Isn’t it sounds amazing?
              </p>
            </div>
            <Button link="/" label="Get Early Access" size="lg" />
          </div>
          <div className="flex flex-col gap-10 lg:col-span-6 relative">
            <img src={Mockups} alt="Mockup" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Hero;
