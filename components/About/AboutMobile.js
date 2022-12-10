import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { TimeLineData } from "../../constants/constants";
import Divider from "../Divider/Divider";

export default function AboutMobile() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
  };
  return (
    <Box id="about">
      <Container maxW="container.xl">
        <Divider />
        <Box marginY="16px">
          <Text fontSize="24px" fontWeight="bold">
            About Me
          </Text>
          <Text fontSize="12px">
            Starting my journey as internship Web Developer, make me feel to
            continue my career path as Web Development, especially Front End
            Stack
          </Text>
        </Box>
        <Slider {...settings}>
          {TimeLineData.map((item, idx) => (
            <Box
              key={idx}
              boxShadow="lg"
              boxSize="100px"
              padding="12px"
              backgroundImage="linear-gradient(to right top, #16213e, #162646, #152a4f, #132f57, #0f3460)"
              color="whitesmoke"
            >
              <Text fontSize="12px"> {item.year} </Text>
              <Text fontSize="12px"> {item.text} </Text>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
