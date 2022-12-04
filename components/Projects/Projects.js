import React from "react";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";

export default function Projects(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <ProjectsMobile />;
  } else {
    return <ProjectsDesktop />;
  }
}
