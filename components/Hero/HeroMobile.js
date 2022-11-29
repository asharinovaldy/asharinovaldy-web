import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function HeroMobile() {
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(hero.jpg)"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="center" minHeight="80vh">
          <Flex flexDirection="column" gap={3}>
            <Text
              textAlign="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="12px"
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
              fontSize="18px"
            >
              Best phase to keep the journey living is learning 💥 <br />
            </Text>
            <Text textAlign="center" color="whitesmoke" fontSize="12px">
              Hello there! Im Ashari Novaldi. In this personal portfolio
              website, im gonna show you about me and several projects Ive
              worked on before.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
