import {
  Wrap,
  IconButton,
  Text,
  VStack,
  Button,
  Switch,
  HStack,
} from "@chakra-ui/react";
import { IoBed, IoBoat, IoGolf } from "react-icons/io5";
import { FaFire, FaCity, FaCoffee, FaFilter } from "react-icons/fa";
import { MdKitesurfing } from "react-icons/md";
import { GiFarmTractor, GiCampingTent } from "react-icons/gi";

const filters = {
  room: <IoBed />,
  trending: <FaFire />,
  "bed & breakfast": <FaCoffee />,
  cities: <FaCity />,
  boats: <IoBoat />,
  surfing: <MdKitesurfing />,
  farming: <GiFarmTractor />,
  golfing: <IoGolf />,
  camping: <GiCampingTent />,
};

const FilterBar = () => {
  return (
    <HStack justifyContent="space-evenly">
      <Wrap gap={8}>
        {Object.keys(filters).map((filter, idx) => {
          return (
            <VStack
              key={idx}
              borderBottom="1px gray solid"
              color="fg.subtle"
              gapY={0}
            >
              <IconButton color="inherit" bg="white">
                {filters[filter as keyof typeof filters]}
              </IconButton>
              <Text fontSize="xs" fontWeight="bold">
                {filter.toUpperCase()}
              </Text>
            </VStack>
          );
        })}
      </Wrap>
      <Button
        variant="ghost"
        px={4}
        py={2}
        border="1px solid"
        borderColor="border.emphasized"
        rounded="xl"
      >
        <FaFilter />
        Filters
      </Button>
      <Switch.Root
        border="1px solid"
        borderColor="border.emphasized"
        rounded="xl"
        px={4}
        py="2.5"
        colorPalette="teal"
        defaultChecked
      >
        <Switch.Label>Display before taxes</Switch.Label>
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
    </HStack>
  );
};

export default FilterBar;
