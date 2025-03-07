import { HStack, Text } from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";

const Branding = () => {
  return (
    <HStack>
      <FaAirbnb size={30} color="#FF385C" />
      <Text fontWeight="bold" color="#FF385C" fontSize={24}>
        airbnb
      </Text>
    </HStack>
  );
};

export default Branding;
