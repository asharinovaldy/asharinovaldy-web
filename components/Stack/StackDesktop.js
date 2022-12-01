import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { stack } from "../../constants/constants";
import Card from "../Card/Card";

export default function StackDesktop(props) {
  const { isMobile } = props;
  return (
    <>
      <Container maxW="container.xl" marginY="24px">
        <Box marginY="24px">
          <Text fontSize="48px" fontWeight="bold">
            Stack and Tools
          </Text>
          <Text fontSize="18px">
            Ive worked with a range a technologies in the web development world.
            From Back-End to Design
          </Text>
          <Box marginY="48px">
            {stack?.map((item, idx) => (
              <Box key={idx} marginY="48px">
                <Text fontSize="32px" fontWeight="bold">
                  {item?.name}
                </Text>

                <Grid templateColumns="repeat(5, 1fr)" gap={6} marginY="16px">
                  {item?.technologies?.map((tech, idx) => (
                    <GridItem key={idx}>
                      <Card
                        names={tech?.name}
                        backgroundColor={tech?.color}
                        image={tech?.images}
                      />
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
