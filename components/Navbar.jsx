import { Avatar, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlinePieChart,
  AiOutlineWallet,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex
      w="15%"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#020202"
      color="#ffff"
    >
      <Flex spacedirection="row">
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="wide"
          >
            Monke.
          </Heading>

          {/* Nav Section */}
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Flex className="sidebar-items">
              <Link>
                <Icon
                  as={AiOutlineHome}
                  fontSize="2xl"
                  className="active-icon"
                ></Icon>
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text className="active">Home</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={AiOutlinePieChart} fontSize="2xl"></Icon>
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text>Credit</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={AiOutlineWallet} fontSize="2xl"></Icon>
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text>Wallet</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link>
                <Icon as={AiOutlineAppstore} fontSize="2xl"></Icon>
              </Link>
              <Link _hover={{ textDecor: "none" }}>
                <Text>Services</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* User Avatar */}
      <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
        <Avatar my={2} src="/assets/user-avatar.jpg" />
        <Text textAlign="center">Aleko Dimitrov</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
