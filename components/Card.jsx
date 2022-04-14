import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { SiVisa } from "react-icons/si";

const Card = (props) => {
  return (
    <Flex
      w="100%"
      h="150px"
      flexDir="column"
      justify="space-between"
      letterSpacing="widest"
      color="#ffff"
    >
      <Text color="#ffff" fontSize={["2xl", "2xl", "2xl", "lg", "2xl", "2xl"]}>
        **** **** **** {props.cardNumber}
      </Text>
      <Flex w="100%" justify="space-between">
        <Flex w="50%" justify="space-between" align="center" flex={1}>
          <Flex flexDir="column">
            <Text>VALID THRU</Text>
            <Text>{props.validThru}</Text>
          </Flex>
          <Flex flexDir="column" flex={2} ml={5}>
            <Text>CVV</Text>
            <Text>***</Text>
          </Flex>
        </Flex>
        <Flex w="50%" justify="flex-end" flex={1}>
          <SiVisa size="60px" opacity={0.6} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
