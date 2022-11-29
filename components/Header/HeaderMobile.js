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
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import { HiMenuAlt1, HiOutlineViewGrid } from "react-icons/hi";

export default function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box paddingY="8px" boxShadow="lg">
        <Container maxW="container.xl">
          <Button ref={btnRef} onClick={onOpen} variant="unstyled">
            {" "}
            <HiMenuAlt1 size="24px" />{" "}
          </Button>
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
              <HiOutlineViewGrid size="24px" />
              <Text fontSize="24px" fontWeight="bold">
                asharinovaldy
              </Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection="column" justifyContent="space-between">
              <Flex flexDirection="column" alignItems="start" gap={8}>
                <Link href="#">Stack</Link>
                <Link href="#">Project</Link>
                <Link href="#">About</Link>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
