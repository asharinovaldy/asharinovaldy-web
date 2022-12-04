import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProjectDesktop(props) {
  const { title, description, image, source, visit } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        width="400px"
        padding="16px"
        borderRadius="16px"
        boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
        _hover={{
          cursor: "pointer",
        }}
        onClick={onOpen}
      >
        <Image src={image || ""} alt="" objectFit="cover" borderRadius="8px" />
        <Box marginY="16px">
          <Text fontSize="24px" fontWeight="bold">
            {title || "Project Title"}
          </Text>
          <Text noOfLines={3}>{description || "Project Description"}</Text>
        </Box>
        <Flex gap={3}>
          <Link href={source || ""} target="_blank">
            <Button> Source </Button>
          </Link>
          <Link href={visit || ""} target="_blank" onClick="">
            <Button
              backgroundColor="#FB2576"
              color="white"
              boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
              _hover={{
                transform: "translate(-10px -50px)",
                backgroundColor: "#e10559",
              }}
            >
              Visit
            </Button>
          </Link>
        </Flex>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>tes</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
