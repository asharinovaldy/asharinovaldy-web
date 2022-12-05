import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { GoMarkGithub, GoRocket } from "react-icons/go";
import PropTypes from "prop-types";

export default function ProjectMobile(props) {
  const { title, description, image, tags, source, visit } = props;

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        width="330px"
        height="300px"
        padding="12px"
        borderRadius="16px"
        boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
        transition="2s ease-in-out"
        _hover={{
          cursor: "pointer",
          transform: "translate(-20px 10px)",
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
          <Text fontSize="16px" fontWeight="bold">
            {title || "Project Title"}
          </Text>
          <Text fontSize="12px" noOfLines={3}>
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

ProjectMobile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  source: PropTypes.string,
  visit: PropTypes.string,
};
