import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { stack } from "../../constants/constants";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";
import { motion } from "framer-motion";

export default function StackDesktop(props) {
  const { isMobile } = props;
  return (
    <>
      <Container maxW="container.xl" marginY="24px" id="stack">
        <Divider />
        <Box marginY="24px">
          <Text fontSize="48px" fontWeight="bold">
            Stack and Tools
          </Text>
          <Text fontSize="18px">
            I&lsquo;ve exploring with several stacks in the web development
            world.
          </Text>
          <Box marginY="48px">
            <Tabs variant="soft-rounded" colorScheme="pink" isFitted>
              <TabList height="48px" marginY="24px">
                {stack?.map((item, idx) => (
                  <Tab key={idx}> {item?.name} </Tab>
                ))}
              </TabList>
              <TabPanels>
                {stack?.map((item, idx) => (
                  <Grid templateColumns="repeat(5, 1fr)" gap={6} key={idx}>
                    {item?.technologies?.map((tech, idx) => (
                      <TabPanel
                        key={idx}
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 5 }}
                      >
                        <GridItem>
                          <Card
                            names={tech?.name}
                            backgroundColor={tech?.color}
                            image={tech?.images}
                          />
                        </GridItem>
                      </TabPanel>
                    ))}
                  </Grid>
                ))}
              </TabPanels>
            </Tabs>
            {/* {stack?.map((item, idx) => (
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
            ))} */}
          </Box>
        </Box>
      </Container>
    </>
  );
}
