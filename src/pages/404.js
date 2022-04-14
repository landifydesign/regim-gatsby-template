import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Button from "../components/button";

const NotFoundPage = () => {
  return (
    <Layout nav={true}>
      <Seo title="Page Not Found" />
      <main className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:py-28 md:py-20 py-10">
          <h1 className="lg:text-display-2xl md:text-display-xl text-display-md font-semibold md:pb-4 pb-2">
            Page not found
          </h1>
          <p className="md:text-body-lg text-body-md pb-10 text-neutral-700">
            The page you requested could not be found.
          </p>
          <Button link="/" label="Return Home" size="lg" />
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
