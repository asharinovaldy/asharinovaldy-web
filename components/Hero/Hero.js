import React from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";
import PropTypes from "prop-types";

export default function Hero(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <HeroMobile {...props} />;
  } else {
    return <HeroDesktop {...props} />;
  }
}

Hero.propTypes = {
  isMobile: PropTypes.bool,
};
