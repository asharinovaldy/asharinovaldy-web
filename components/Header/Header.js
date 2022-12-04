import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import PropTypes from "prop-types";

export default function Header(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool,
};
