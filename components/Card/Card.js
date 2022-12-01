import React from "react";
import CardDesktop from "./CardDesktop";
import CardMobile from "./CardMobile";
import PropTypes from "prop-types";

export default function Card(props) {
  const { isMobile } = props;
  if (isMobile) {
    return <CardMobile {...props} />;
  } else {
    return <CardDesktop {...props} />;
  }
}

Card.propTypes = {
  isMobile: PropTypes.bool,
};
