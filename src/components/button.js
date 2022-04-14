import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, link, size }) => (
  <a
    className={`button flex items-center justify-center rounded-md bg-primary-600 text-white font-semibold  ${
      size === "lg" ? "px-4 py-3 text-body-md" : "px-4 py-2.5 text-body-sm"
    }`}
    href={link}>
    {label}
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;
