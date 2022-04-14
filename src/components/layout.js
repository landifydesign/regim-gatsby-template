import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import Cta from "./cta";

const Layout = ({ children, nav }) => (
  <>
    {nav === true ? <Header /> : ""}
    <div>
      <main>{children}</main>
    </div>
    <Cta />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  nav: PropTypes.bool,
};

export default Layout;
