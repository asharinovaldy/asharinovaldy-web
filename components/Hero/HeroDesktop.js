import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function HeroDesktop() {
  return (
    <Box
      backgroundSize="cover"
      minH="400px"
      backgroundAttachment="fixed"
      backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(hero.jpg)"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="center" minHeight="80vh">
          <Box>
            <Text
              textAlign="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="18px"
            >
              <ReactTypingEffect
                text={["FRONT-END WEB DEVELOPER", "LARAVEL DEVELOPER", "SQL"]}
                speed={100}
                typingDelay={250}
                eraseDelay={200}
                eraseSpeed={100}
              />
            </Text>
            <Text
              textAlign="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="36px"
            >
              Best phase to keep the journey living is learning 💥 <br />
            </Text>
            <Text textAlign="center" color="whitesmoke" fontSize="16px">
              Hello there! Im Ashari Novaldi. In this personal portfolio
              website, im gonna show you about me and several projects Ive
              worked on before.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
