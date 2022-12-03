import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { projects } from "../../constants/constants";
import Project from "../Project/Project";

export default function ProjectsDesktop() {
  return (
    <Box marginY="42px">
      <Container maxW="container.xl">
        <Box>
          <Text fontSize="48px" fontWeight="bold">
            Projects
          </Text>
          <Text fontSize="18px">
            Ive worked with a range a technologies in the web development world.
            From Back-End to Design
          </Text>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {projects?.map((item, idx) => (
            <GridItem key={idx}>
              <Project
                title={item?.title}
                image={item?.image}
                description={item?.description}
                source={item?.source}
                visit={item?.visit}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
