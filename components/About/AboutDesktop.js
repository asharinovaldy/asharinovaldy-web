import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { TimeLineData } from "../../constants/constants";
import Divider from "../Divider/Divider";

export default function AboutDesktop() {
  return (
    <Box marginY="48px" id="about">
      <Container maxW="container.xl">
        <Divider />
        <Box marginY="16px">
          <Text fontSize="48px" fontWeight="bold">
            About Me
          </Text>
          <Text fontSize="18px">
            Starting my journey as internship Web Developer, make me feel to
            continue my career path as Web Development, especially Front End
            Stack
          </Text>
        </Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} marginY="16px">
          {TimeLineData.map((item, idx) => (
            <GridItem
              key={idx}
              boxShadow="lg"
              padding="12px"
              // backgroundColor="rgba(21, 0, 80, 0.5)"
              backgroundImage="linear-gradient(to right top, #16213e, #162646, #152a4f, #132f57, #0f3460)"
              color="whitesmoke"
            >
              <Text fontSize="12px"> {item.year} </Text>
              <Text fontSize="14px"> {item.text} </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
