import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

export default function CardDesktop(props) {
  const { names, image, backgroundColor } = props;
  return (
    <>
      <Flex
        backgroundColor={backgroundColor}
        boxSize="200px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
      >
        <Flex flexDirection="column" alignItems="center" gap={3}>
          <Image src={image} alt={names} width="120px" />
          <Text fontWeight="bold" fontSize="16px" textAlign="center">
            {" "}
            {names}{" "}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

CardDesktop.propTypes = {
  names: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
};
