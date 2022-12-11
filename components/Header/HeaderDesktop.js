import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function HeaderDesktop() {
  const router = useRouter();
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={99}
      backgroundColor="#fff"
      boxShadow="md"
    >
      <Box paddingY="16px">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Flex alignItems="center" gap={3}>
              🚀
              <Text fontSize="24px" fontWeight="bold">
                asharinovaldy
              </Text>
              🚀
            </Flex>
            <Flex gap={6}>
              <Link
                href="https://www.linkedin.com/in/asharinovaldy21/"
                target="_blank"
              >
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  borderRadius="24px"
                />
              </Link>
              <Link href="https://github.com/asharinovaldy" target="_blank">
                <IconButton
                  aria-label="GitHub"
                  icon={<FaGithub />}
                  borderRadius="24px"
                />
              </Link>
              <Link
                href="https://www.instagram.com/asharinovaldy/"
                target="_blank"
              >
                <IconButton
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  borderRadius="24px"
                />
              </Link>
            </Flex>
            <Flex alignItems="center" gap={12}>
              <Link href="#stack">Stack</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#about">About</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
