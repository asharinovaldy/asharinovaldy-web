import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function HeaderDesktop() {
  const router = useRouter();
  return (
    <>
      <Box paddingY="16px">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Flex alignItems="center" gap={3}>
              <HiOutlineViewGrid size="40px" />
              <Text fontSize="24px" fontWeight="bold">
                asharinovaldy
              </Text>
            </Flex>
            <Flex alignItems="center" gap={12}>
              <Link href="#stack">Stack</Link>
              <Link href="#">Project</Link>
              <Link href="#">About</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
