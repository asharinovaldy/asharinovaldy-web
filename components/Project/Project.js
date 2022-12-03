import React from "react";
import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";

export default function Project(props) {
  const { isMobile } = props;
  if (isMobile) {
    return <ProjectMobile {...props} />;
  } else {
    return <ProjectDesktop {...props} />;
  }
}
