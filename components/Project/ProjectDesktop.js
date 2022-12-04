import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { GoMarkGithub, GoRocket } from "react-icons/go";

export default function ProjectDesktop(props) {
  const { title, description, image, tags, source, visit } = props;

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        width="400px"
        height="360px"
        padding="16px"
        borderRadius="16px"
        boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
        transition="250ms transform"
        _hover={{
          cursor: "pointer",
          transform: "translateY(-20px)",
        }}
      >
        <Image
          src={image || ""}
          alt=""
          objectFit="cover"
          borderRadius="8px"
          fallbackSrc="https://via.placeholder.com/350x150.png?text=Portfolio%20https://placeholder.com/"
        />
        <Box>
          <Text fontSize="24px" fontWeight="bold">
            {title || "Project Title"}
          </Text>
          <Text fontSize="14px" noOfLines={3}>
            {description || "Project Description"}
          </Text>
        </Box>

        <Flex justifyContent="space-between">
          <Flex gap={2} marginY="12px">
            {tags?.map((tag, idx) => (
              <Text key={idx} fontSize="12px" fontWeight="bold">
                {" "}
                {tag}{" "}
              </Text>
            ))}
          </Flex>
          <Flex gap={3}>
            <Link href={source || ""} target="_blank">
              <Button>
                {" "}
                <GoMarkGithub />{" "}
              </Button>
            </Link>
            <Link href={visit || ""} target="_blank">
              <Button
                backgroundColor="#FB2576"
                color="white"
                boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
                _hover={{
                  transform: "translate(-10px -50px)",
                  backgroundColor: "#e10559",
                }}
              >
                <GoRocket />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

ProjectDesktop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  source: PropTypes.string,
  visit: PropTypes.string,
};
