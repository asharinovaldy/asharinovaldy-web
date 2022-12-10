import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { projects } from "../../constants/constants";
import Divider from "../Divider/Divider";
import Project from "../Project/Project";
import { motion } from "framer-motion";

export default function ProjectsMobile() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "18px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <>
      <Box
        marginY="42px"
        id="projects"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <Container maxW="container.xl">
          <Divider />
          <Box marginY="16px">
            <Text fontSize="24px" fontWeight="bold">
              Projects
            </Text>
          </Box>
          <Slider {...settings}>
            {projects?.map((item, idx) => (
              <Project
                key={idx}
                title={item?.title}
                image={item?.image}
                description={item?.description}
                tags={item?.tags}
                source={item?.source}
                visit={item?.visit}
                isMobile
              />
            ))}
          </Slider>
        </Container>
      </Box>
    </>
  );
}
