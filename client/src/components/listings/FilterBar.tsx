import { Wrap, IconButton, Text, VStack } from "@chakra-ui/react";
import { IoBed, IoBoat } from "react-icons/io5";
import { FaFire, FaCity, FaCoffee } from "react-icons/fa";
import { MdKitesurfing } from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";

const filters = {
  room: <IoBed />,
  trending: <FaFire />,
  "bed & breakfast": <FaCoffee />,
  cities: <FaCity />,
  boats: <IoBoat />,
  surfing: <MdKitesurfing />,
  farming: <GiFarmTractor />,
};

const FilterBar = () => {
  return (
    <Wrap gap={6} my={2} px={5}>
      {Object.keys(filters).map((filter, idx) => {
        return (
          <VStack key={idx}>
            <IconButton color="black" bg="white">
              {filters[filter as keyof typeof filters]}
            </IconButton>
            <Text fontSize="sm" fontWeight="bold">
              {filter.toUpperCase()}
            </Text>
          </VStack>
        );
      })}
    </Wrap>
  );
};

export default FilterBar;
