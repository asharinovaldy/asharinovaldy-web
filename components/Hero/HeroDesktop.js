import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

export default function HeroDesktop() {
  return (
    <Box
      backgroundSize="cover"
      minH="400px"
      backgroundAttachment="fixed"
      backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(hero.jpg)"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="center" minHeight="80vh">
          <Flex flexDirection="column" gap={6}>
            <Flex justifyContent="center">
              <ReactTypingEffect
                text={[
                  "FRONT-END DEVELOPER",
                  "LARAVEL DEVELOPER",
                  "SQL DEVELOPER",
                ]}
                speed={100}
                typingDelay={250}
                eraseDelay={200}
                eraseSpeed={100}
                className="typingText"
              />
            </Flex>

            <Text
              textAlign="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="36px"
            >
              Hello there! I&lsquo;m Ashari Novaldi 👨‍💻 <br />
            </Text>
            <Text textAlign="center" color="whitesmoke" fontSize="16px">
              In this personal portfolio website, i&lsquo;m gonna show you about
              me and several projects I&lsquo;ve worked on before.
            </Text>
            <Link
              href="#projects"
              style={{
                margin: "0 auto",
              }}
            >
              <Button
                backgroundColor="#FB2576"
                rightIcon={<HiArrowRight />}
                color="whitesmoke"
                padding="16px"
                fontWeight="normal"
                transition="0.5s ease-in-out"
                _hover={{
                  transform: "translate(-10px, -5px)",
                  backgroundColor: "#e10559",
                }}
              >
                Explore My Projects
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
