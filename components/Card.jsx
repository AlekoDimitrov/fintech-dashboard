import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { SiVisa } from "react-icons/si";

const Card = (props) => {
  return (
    <Flex
      w="100%"
      h="50%"
      flexDir="column"
      justify="space-between"
      letterSpacing="widest"
      color="#ffff"
    >
      <Text color="#ffff" fontSize="3xl">
        **** **** **** {props.cardNumber}
      </Text>
      <Flex w="100%" justify="space-between">
        <Flex w="50%" justify="space-between" align="center">
          <Flex flexDir="column">
            <Text>VALID THRU</Text>
            <Text textAlign="center">{props.validThru}</Text>
          </Flex>
          <Flex flexDir="column">
            <Text>CVV</Text>
            <Text textAlign="center">***</Text>
          </Flex>
        </Flex>
        <Flex w="50%" justify="flex-end">
          <SiVisa size="60px" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
