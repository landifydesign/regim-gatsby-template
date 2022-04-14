import React from "react";
import PropTypes from "prop-types";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex md:flex-col flex-row self-start md:items-center md:gap-6 gap-4 lg:p-6 md:p-0 py-6">
      <img
        src={icon}
        alt="Feature Icon"
        width={88}
        height={88}
        className="md:w-22 md:h-22 w-14 h-14"
      />
      <div className="flex flex-col gap-2 xl:items-center md:text-center">
        <p className="md:text-display-xs text-body-xl font-semibold">{title}</p>
        <p className="md:text-body-md text-body-sm font-normal text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
