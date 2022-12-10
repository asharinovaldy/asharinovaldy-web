import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { projects } from "../../constants/constants";
import Divider from "../Divider/Divider";
import Project from "../Project/Project";
import { motion } from "framer-motion";

export default function ProjectsDesktop() {
  return (
    <Box id="projects">
      <Box marginY="42px">
        <Container maxW="container.xl">
          <Divider />
          <Box>
            <Text fontSize="48px" fontWeight="bold">
              Projects
            </Text>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} marginY="24px">
            {projects?.map((item, idx) => (
              <GridItem
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 5 }}
                key={idx}
              >
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
    </Box>
  );
}
