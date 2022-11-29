import React from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <HeroMobile {...props} />;
  } else {
    return <HeroDesktop {...props} />;
  }
}
