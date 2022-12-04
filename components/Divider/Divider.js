import { Box } from "@chakra-ui/react";
import React from "react";

export default function Divider() {
  return (
    <>
      <Box
        height="8px"
        borderRadius="16px"
        width="120px"
        backgroundImage="linear-gradient(to right top, #1a1a2e, #422950, #793166, #b4376c, #e94560)"
      ></Box>
    </>
  );
}
