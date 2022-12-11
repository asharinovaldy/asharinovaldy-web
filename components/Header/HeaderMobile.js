import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt1, HiOutlineViewGrid } from "react-icons/hi";

export default function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={99}
      paddingTop={5}
      backgroundColor="#fff"
    >
      <Box paddingY="8px" boxShadow="lg">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Button ref={btnRef} onClick={onOpen} variant="unstyled">
              {" "}
              <HiMenuAlt1 size="24px" />{" "}
            </Button>

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
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems="center" gap={3}>
              🚀
              <Text fontSize="24px" fontWeight="bold">
                asharinovaldy
              </Text>
              🚀
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection="column" justifyContent="space-between">
              <Flex flexDirection="column" alignItems="center" gap={8}>
                <Link href="#stack">
                  <Button colorScheme="pink" borderRadius="16px" width="200px">
                    Stack
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button colorScheme="pink" borderRadius="16px" width="200px">
                    Projects
                  </Button>
                </Link>
                <Link href="#about">
                  <Button colorScheme="pink" borderRadius="16px" width="200px">
                    About
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
