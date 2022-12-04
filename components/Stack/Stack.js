import React from "react";
import StackDesktop from "./StackDesktop";
import StackMobile from "./StackMobile";

export default function Stack(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <StackMobile {...props} />;
  } else {
    return <StackDesktop {...props} />;
  }
}
