import {
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterMobile() {
  let date = new Date();
  return (
    <>
      <Box backgroundImage="radial-gradient(circle, #16213e, #162646, #152a4f, #132f57, #0f3460)">
        <Container maxW="container.xl">
          <Flex
            gap={6}
            paddingY="16px"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box>
              <Link href="mailto:asharinovaldi6319@gmail.com">
                <Text fontWeight="semibold" color="#f5f5f5">
                  Email : asharinovaldi6319@gmail.com
                </Text>
              </Link>
            </Box>
            <Flex gap={3}>
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
          </Flex>
        </Container>
      </Box>
      <Center paddingY="8px">
        <Text fontSize="12px">
          Copyright &copy; {date.getFullYear()} | Designed and Build with 🔥 by
          Ashari Novaldi
        </Text>
      </Center>
    </>
  );
}
