import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroMobile() {
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(hero.jpg)"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="center" minHeight="50vh">
          <Flex flexDirection="column" gap={6}>
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
            <Text
              textAlign="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="24px"
            >
              Hello there! I&lsquo;m Ashari Novaldi 💥 <br />
            </Text>
            <Text textAlign="center" color="whitesmoke" fontSize="12px">
              In this personal portfolio website, i&lsquo;m gonna show you about
              me and several projects I&lsquo;ve worked on before.
            </Text>
            <Link href="#projects" style={{ margin: "0 auto" }}>
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
