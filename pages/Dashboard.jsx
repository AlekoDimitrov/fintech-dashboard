import { Flex } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Analytics from "../components/Analytics";
import MyCards from "../components/MyCards";

const Dashboard = () => {
  return (
    <Flex
      h={[null, null, "100vh", "100vh", "100vh"]}
      flexDir={["column", "column", "row", "row", "row"]}
      overflow={["auto", "auto", "hidden", "hidden", "hidden"]}
      maxW="2000px"
    >
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
