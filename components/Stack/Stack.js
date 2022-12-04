import React from "react";
import StackDesktop from "./StackDesktop";
import StackMobile from "./StackMobile";
import PropTypes from "prop-types";

export default function Stack(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <StackMobile {...props} />;
  } else {
    return <StackDesktop {...props} />;
  }
}

Stack.propTypes = {
  isMobile: PropTypes.bool,
};
