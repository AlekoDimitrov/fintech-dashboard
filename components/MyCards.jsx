import React from "react";
import { BsPlus } from "react-icons/bs";
import { AiFillCreditCard, AiFillDollarCircle } from "react-icons/ai";

import {
  Flex,
  Text,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Stack,
  AvatarGroup,
} from "@chakra-ui/react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { FcNfcSign } from "react-icons/fc";
import Card from "./Card";
import { useState } from "react";

const MyCards = () => {
  const [card, setCard] = useState(1);
  const setCardColor = () => {
    if (card === 1) {
      return "linear-gradient(#9572A5, #883BFA)";
    } else if (card === 2) {
      return "linear-gradient(#D19274, #FEA64C)";
    } else if (card === 3) {
      return "linear-gradient(#B2E8F7, #5EACE9)";
    } else {
      return "linear-gradient(#75B69C, #4E5273)";
    }
  };

  return (
    <Flex
      flex={1}
      bgColor="#F5F5F5"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
    >
      <Flex justifyContent="center">
        <InputGroup backgroundColor="#ffff" borderRadius="10px" w="100%">
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray" size="25px" />}
          ></InputLeftElement>
          <Input border="none" borderRadius="10px" placeholder="Search" />
        </InputGroup>
        <IconButton
          icon={<AiOutlineBell />}
          borderRadius="50px"
          backgroundColor="#ffff"
          ml="10px"
        />
        <Flex
          color="#ffff"
          backgroundColor="#b57295"
          borderRadius="50%"
          w="30px"
          h="27px"
          justifyContent="center"
          alignItems="center"
          fontSize="sm"
          fontWeight="bold"
          ml={-3}
          zIndex="1"
        >
          2
        </Flex>
      </Flex>
      <Flex h="100px" align="center">
        <Text fontSize="4xl" fontWeight="black" letterSpacing="tight" p="3px">
          My Cards
        </Text>
      </Flex>
      <Flex
        w="100%"
        h="300px"
        backgroundImage={setCardColor}
        borderRadius="30px"
        p="20px"
        flexDir="column"
      >
        <Flex h="50%" w="100%">
          <Flex justify="space-between" w="100%">
            <Flex flexDir="column">
              <Text color="#B7B7B7" fontSize="sm">
                Current Balance
              </Text>
              <Text
                letterSpacing="tight"
                fontWeight="bold"
                color="#ffff"
                fontSize="3xl"
              >
                {card === 1 && "$5,750.20"}
                {card === 2 && "$323.15"}
                {card === 3 && "$5"}
                {card === 4 && "$95,000,000.05"}
              </Text>
            </Flex>
            <Flex align="self-start" p="10px">
              <FcNfcSign size="35px" />
              <Text
                ml="15px"
                color="#ffff"
                fontWeight="bold"
                fontSize="2xl"
                letterSpacing="wide"
              >
                Monke.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {card === 1 && <Card validThru="01/27" cardNumber="1259" />}
        {card === 2 && <Card validThru="05/24" cardNumber="5581" />}
        {card === 3 && <Card validThru="11/22" cardNumber="3259" />}
        {card === 4 && <Card validThru="08/23" cardNumber="7472" />}
      </Flex>
      <Flex justify="center" h="50px" align="center" mt={5}>
        <Button
          backgroundColor={card === 1 ? "blackAlpha.700" : "blackAlpha.400"}
          h="10px"
          onClick={() => setCard((card = 1))}
        ></Button>
        <Button
          backgroundColor={card === 2 ? "blackAlpha.700" : "blackAlpha.400"}
          h="10px"
          onClick={() => setCard((card = 2))}
        ></Button>
        <Button
          backgroundColor={card === 3 ? "blackAlpha.700" : "blackAlpha.400"}
          h="10px"
          onClick={() => setCard((card = 3))}
        ></Button>
        <Button
          backgroundColor={card === 4 ? "blackAlpha.700" : "blackAlpha.400"}
          h="10px"
          onClick={() => setCard((card = 4))}
        ></Button>
      </Flex>
      <Flex justify="center">
        <Flex
          flexDir="column"
          h="70px"
          justify="space-between"
          mt="15px"
          w="90%"
          letterSpacing="tight"
        >
          <Flex justify="space-between">
            <Text>Balance</Text>
            <Text fontWeight="bold">$140.42</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Credit Limit</Text>
            <Text fontWeight="bold">$150.00</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir="column" mt="70px">
        <Text fontWeight="bold" fontSize="3xl" letterSpacing="wide">
          Send Money to
        </Text>
        <AvatarGroup size="md" mt="20px" spacing={-2}>
          <Avatar
            name="Satoshi Nakamoto"
            src="/assets/satoshi-avatar.jpg"
          ></Avatar>
          <Avatar name="W A" border="none"></Avatar>
          <Avatar name="John Mcafee" src="/assets/john-avatar.jpg"></Avatar>
          <Avatar name=""></Avatar>
          <Avatar
            icon={<BsPlus />}
            cursor="pointer"
            backgroundColor={"blackAlpha.100"}
          ></Avatar>
        </AvatarGroup>
      </Flex>
      <Flex flexDir="column" mt="50px" color={"gray.500"}>
        <Flex flexDir="column">
          <label>Card Number</label>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiFillCreditCard />}
            />
            <Input placeholder="1234 5678 9101 1121" type={"number"} />
          </InputGroup>
        </Flex>
        <Flex flexDir="column" mt={6}>
          <label>Sum</label>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiFillDollarCircle />}
            />
            <Input placeholder="130" />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex w="100%">
        <Button
          backgroundColor={"blackAlpha.900"}
          color={"whiteAlpha.900"}
          mt={8}
          w={"100%"}
          colorScheme="black"
          height={"60px"}
          borderRadius={15}
        >
          Send Money
        </Button>
      </Flex>
    </Flex>
  );
};

export default MyCards;
