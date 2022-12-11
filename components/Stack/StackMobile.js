import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { stack } from "../../constants/constants";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";

export default function StackMobile(props) {
  const { isMobile } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
  };
  return (
    <Box id="stack">
      <Container maxW="container.xl" marginY="24px">
        <Divider />
        <Box marginY="24px">
          <Text fontSize="24px" fontWeight="bold">
            Stack and Tools
          </Text>
          <Text fontSize="12px">
            I&lsquo;ve exploring with several stacks in the web development
          </Text>
          <Box>
            {stack?.map((item, idx) => (
              <Box key={idx} marginY="32px">
                <Text fontSize="24px" fontWeight="bold">
                  {item?.name}
                </Text>

                <Slider {...settings}>
                  {item?.technologies?.map((tech, idx) => (
                    <Card
                      key={idx}
                      names={tech?.name}
                      backgroundColor={tech?.color}
                      image={tech?.images}
                      isMobile
                    />
                  ))}
                </Slider>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
