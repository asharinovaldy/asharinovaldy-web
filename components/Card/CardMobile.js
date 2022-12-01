import React from "react";
import PropTypes from "prop-types";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function CardMobile(props) {
  const { names, image, backgroundColor } = props;
  return (
    <>
      <Flex
        backgroundColor={backgroundColor}
        boxSize="150px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 8px 24px rgba(0,0,0, 0.15)"
      >
        <Flex flexDirection="column" alignItems="center" gap={3}>
          <Image src={image} alt={names} width="80px" />
          <Text fontWeight="bold" fontSize="12px" textAlign="center">
            {" "}
            {names}{" "}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

CardMobile.propTypes = {
  names: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
};
