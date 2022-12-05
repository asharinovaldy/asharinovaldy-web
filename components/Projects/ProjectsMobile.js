import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { projects } from "../../constants/constants";
import Divider from "../Divider/Divider";
import Project from "../Project/Project";

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
      <Box marginY="42px">
        <Container maxW="container.xl">
          <Divider />
          <Box marginY="16px">
            <Text fontSize="24px" fontWeight="bold">
              Projects
            </Text>
            <Text fontSize="12px">
              Ive worked with a range a technologies in the web development
              world. From Back-End to Design
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
