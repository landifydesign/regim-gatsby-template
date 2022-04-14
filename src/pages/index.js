import React from "react";
import Features from "../components/features";
import Hero from "../components/hero";
import Inetgrations from "../components/integrations";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout nav={false}>
    <Seo />
    <Hero />
    <Features />
    <Inetgrations />
  </Layout>
);

export default IndexPage;
