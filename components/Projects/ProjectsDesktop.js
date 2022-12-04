import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { projects } from "../../constants/constants";
import Divider from "../Divider/Divider";
import Project from "../Project/Project";

export default function ProjectsDesktop() {
  return (
    <Box marginY="42px">
      <Container maxW="container.xl">
        <Divider />
        <Box>
          <Text fontSize="48px" fontWeight="bold">
            Projects
          </Text>
          <Text fontSize="18px">
            Ive worked with a range a technologies in the web development world.
            From Back-End to Design
          </Text>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} marginY="24px">
          {projects?.map((item, idx) => (
            <GridItem key={idx}>
              <Project
                title={item?.title}
                image={item?.image}
                description={item?.description}
                tags={item?.tags}
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
