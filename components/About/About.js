import React from "react";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";
import PropTypes from "prop-types";

export default function About(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <AboutMobile />;
  } else {
    return <AboutDesktop />;
  }
}

About.propTypes = {
  isMobile: PropTypes.bool,
};
