import React from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import PropTypes from "prop-types";

export default function Footer(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <FooterMobile />;
  } else {
    return <FooterDesktop />;
  }
}

Footer.propTypes = {
  isMobile: PropTypes.bool,
};
