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
      w={["100%", "100%", "8%", "15%", "15%"]}
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#020202"
      color="#ffff"
    >
      {/* "Monke." logo & navigation */}
      <Flex spacedirection="row" h={[200, null, null, null]}>
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="wide"
            display={["flex", "flex", "none", "flex", "flex"]}
            h={"0%"}
          >
            Monke.
          </Heading>
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="wide"
            display={["none", "none", "flex", "none", "none"]}
          >
            M.
          </Heading>

          {/* Nav Section */}
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            alignItems={[
              "flex-start",
              "flex-start",
              "center",
              "flex-start",
              "flex-start",
            ]}
            justifyContent="center"
            p={5}
          >
            <Flex className="sidebar-items">
              <Flex display={["none", "none", "flex", "flex", "flex"]}>
                <Link>
                  <Icon
                    as={AiOutlineHome}
                    fontSize="2xl"
                    className="active-icon"
                  ></Icon>
                </Link>
              </Flex>

              <Link _hover={{ textDecor: "none" }}>
                <Text
                  className="active"
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  Home
                </Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Flex display={["none", "none", "flex", "flex", "flex"]}>
                <Link>
                  <Icon as={AiOutlinePieChart} fontSize="2xl"></Icon>
                </Link>
              </Flex>

              <Link _hover={{ textDecor: "none" }}>
                <Text display={["flex", "flex", "none", "flex", "flex"]}>
                  Credit
                </Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Flex display={["none", "none", "flex", "flex", "flex"]}>
                <Link>
                  <Icon as={AiOutlineWallet} fontSize="2xl"></Icon>
                </Link>
              </Flex>
              <Link _hover={{ textDecor: "none" }}>
                <Text display={["flex", "flex", "none", "flex", "flex"]}>
                  Wallet
                </Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Flex display={["none", "none", "flex", "flex", "flex"]}>
                <Link>
                  <Icon as={AiOutlineAppstore} fontSize="2xl"></Icon>
                </Link>
              </Flex>
              <Link _hover={{ textDecor: "none" }}>
                <Text display={["flex", "flex", "none", "flex", "flex"]}>
                  Services
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* User Avatar */}
      <Flex
        flexDir="column"
        alignItems="center"
        mb={[0, 0, 10, 10, 10, 10]}
        mt={[10, 10, 5, 5, 5]}
      >
        <Avatar my={2} src="/assets/user-avatar.jpg" />
        <Flex display={["flex", "flex", "none", "flex", "flex"]}>
          <Text textAlign="center" p={5}>
            Aleko Dimitrov
          </Text>
        </Flex>
        <Flex display={["none", "none", "flex", "none", "none"]}>
          <Text textAlign="center" p={5}>
            Aleko D.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
