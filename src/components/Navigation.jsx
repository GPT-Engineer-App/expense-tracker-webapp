import { HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <HStack spacing={4} position="fixed" bottom={0} width="100%" justifyContent="center" bg="white" p={4} boxShadow="md">
      <IconButton aria-label="Home" icon={<FaHome />} onClick={() => navigate("/main")} />
      <IconButton aria-label="Expenses" icon={<FaChartBar />} onClick={() => navigate("/expenses")} />
      <IconButton aria-label="Profile" icon={<FaUser />} onClick={() => navigate("/profile")} />
    </HStack>
  );
};

export default Navigation;
