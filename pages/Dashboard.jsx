import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlinePieChart,
  AiOutlineWallet,
  AiOutlineAppstore,
  AiOutlineCalendar,
} from "react-icons/ai";
import { DashboardChart } from "../components/Chart.tsx";

const Dashboard = () => {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="#020202"
        color="#ffff"
      >
        <Flex spaceDir="row">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="wide"
            >
              Monke .
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

      {/* Column 2 */}
      <Flex w="55%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,{" "}
          <Flex fontWeight="bold" display="inline-flex">
            Aleko
          </Flex>
        </Heading>
        <Text color="gray" fontSize="small">
          My Balance
        </Text>{" "}
        <Text fontWeight="bold" fontSize="2xl">
          $5,750.20
        </Text>
        <DashboardChart />
        <Flex mt={8} justifyContent="space-between">
          {" "}
          <Flex w="28%" justifyContent="space-between">
            <Heading as="h2" size="lg" letterSpacing="tight" fontWeight="bold">
              Transactions
            </Heading>
            <Text color="gray" fontSize="small" alignSelf="center">
              Apr 2022
            </Text>
          </Flex>
          <Flex>
            <IconButton icon={<AiOutlineCalendar />} w="72%"></IconButton>
          </Flex>
        </Flex>
        <Flex flexDir="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of Transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex>
                      <Avatar
                        size="md"
                        mr={2}
                        src="/assets/kaliakra-logo.jpg"
                      ></Avatar>
                      <Flex flexDir="column" ml={6}>
                        <Heading size="md" letterSpacing="tight">
                          Kaliakra
                        </Heading>
                        <Text color="gray" fontSize="sm">
                          Apr 24, 2022 at 16:00
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td fontSize="sm">Groceries</Td>
                  <Td isNumeric fontWeight="bold">
                    +$0.10
                  </Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$6
                    </Text>
                    .00
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w="35%"
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
      ></Flex>
    </Flex>
  );
};

export default Dashboard;
