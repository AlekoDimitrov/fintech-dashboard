import { Flex } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Analytics from "../components/Analytics";
import MyCards from "../components/MyCards";

const Dashboard = () => {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      {/* Column 1 */}
      <Navbar />

      {/* Column 2 */}
      <Analytics />

      {/* Column 3 */}
      <MyCards />
    </Flex>
  );
};

export default Dashboard;
