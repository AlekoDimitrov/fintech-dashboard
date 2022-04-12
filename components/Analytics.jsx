import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCalendar,
} from "react-icons/ai";
import { useState } from "react";
import { DashboardChart } from "./DashboardChart.tsx";

const Analytics = () => {
  const [display, changeDisplay] = useState("hide");

  return (
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
              <Tr>
                <Td>
                  <Flex>
                    <Avatar
                      size="md"
                      mr={2}
                      src="/assets/nojovetebg-logo.jpg"
                    ></Avatar>
                    <Flex flexDir="column" ml={6}>
                      <Heading size="md" letterSpacing="tight">
                        nojovete.bg
                      </Heading>
                      <Text color="gray" fontSize="sm">
                        Apr 24, 2022 at 16:00
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td fontSize="sm">Kitchen Supplies</Td>
                <Td isNumeric fontWeight="bold">
                  +$6.00
                </Td>
                <Td isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$326
                  </Text>
                  .99
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex>
                    <Avatar
                      size="md"
                      mr={2}
                      src="/assets/tojiro-logo.jpg"
                    ></Avatar>
                    <Flex flexDir="column" ml={6}>
                      <Heading size="md" letterSpacing="tight">
                        Tojiro
                      </Heading>
                      <Text color="gray" fontSize="sm">
                        Apr 24, 2022 at 16:00
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td fontSize="sm">Kitchen Supplies</Td>
                <Td isNumeric fontWeight="bold">
                  +$12.00
                </Td>
                <Td isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$615
                  </Text>
                  .00
                </Td>
              </Tr>
              {display === "show" && (
                <>
                  <Tr>
                    <Td>
                      <Flex>
                        <Avatar
                          size="md"
                          mr={2}
                          src="/assets/vitalik-avatar.jpg"
                        ></Avatar>
                        <Flex flexDir="column" ml={6}>
                          <Heading size="md" letterSpacing="tight">
                            Ethereum
                          </Heading>
                          <Text color="gray" fontSize="sm">
                            Apr 21, 2022 at 12:00
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td fontSize="sm">Exchange</Td>
                    <Td isNumeric fontWeight="bold">
                      +$12563.00
                    </Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$12563
                      </Text>
                      .00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex>
                        <Avatar
                          size="md"
                          mr={2}
                          src="/assets/gme-logo.jpg"
                        ></Avatar>
                        <Flex flexDir="column" ml={6}>
                          <Heading size="md" letterSpacing="tight">
                            Gamestop
                          </Heading>
                          <Text color="gray" fontSize="sm">
                            Apr 09, 2022 at 13:12
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td fontSize="sm">Games & Toys</Td>
                    <Td isNumeric fontWeight="bold">
                      +$6.00
                    </Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$326
                      </Text>
                      .99
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex>
                        <Avatar
                          size="md"
                          mr={2}
                          src="/assets/netflix-logo.jpg"
                        ></Avatar>
                        <Flex flexDir="column" ml={6}>
                          <Heading size="md" letterSpacing="tight">
                            Netflix
                          </Heading>
                          <Text color="gray" fontSize="sm">
                            Apr 14, 2022 at 21:35
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td fontSize="sm">Entertainment</Td>
                    <Td isNumeric fontWeight="bold">
                      +$0.05
                    </Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$7
                      </Text>
                      .00
                    </Td>
                  </Tr>
                </>
              )}
            </Tbody>
          </Table>
        </Flex>
        <Flex align="center">
          <Divider />
          <IconButton
            icon={
              display === "show" ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />
            }
            onClick={() => {
              if (display === "show") {
                changeDisplay("none");
              } else {
                changeDisplay("show");
              }
            }}
          ></IconButton>
          <Divider />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Analytics;
