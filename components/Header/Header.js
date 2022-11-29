import { Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header(props) {
  const { isMobile } = props;

  if (isMobile) {
    return <HeaderMobile />;
  } else {
    return <HeaderDesktop />;
  }
}
