import React from "react";

import Button from "./button";

const Cta = () => (
  <div className="bg-neutral-900 text-white">
    <div className="container mx-auto py-16">
      <div className="grid xl:grid-cols-12 grid-cols-1 items-center text-center xl:py-12 gap-10">
        <div className="xl:col-span-2 xl:block hidden"></div>
        <div className="flex flex-col items-center gap-10 xl:col-span-8">
          <div className="flex flex-col gap-4 ">
            <h3 className="lg:text-display-lg md:text-display-md text-display-sm font-semibold">
              Create your event with RegiM
            </h3>
            <p className="md:text-body-lg text-body-md font-normal">
              Leveraging our virtual and live event experience, Hubilo offers
              everything you need to set up your next hybrid event from
              registration to executing a flawless event.
            </p>
          </div>
          <Button link="/" label="Get Early Access" size="lg" />
        </div>
      </div>
      <div className="xl:col-span-2 xl:block hidden"></div>
    </div>
  </div>
);
export default Cta;
