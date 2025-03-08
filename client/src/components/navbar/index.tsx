import {
  Button,
  HStack,
  Container,
  Text,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Branding from "./Branding";
import UserMenu from "./UserMenu";

const commonData = {
  Where: "Search Destination",
  Who: "Add guests",
};

const filterData = {
  stay: {
    ...commonData,
    "Check In": "Add Dates",
    "Check Out": "Add Dates",
  },
  experiences: {
    ...commonData,
    Date: "Add Dates",
  },
};

const NavBar = () => {
  return (
    <Container fluid my={5}>
      <HStack justifyContent="space-between" m={5}>
        <Branding />
        <HStack>
          <Button variant="ghost" borderRadius="xl">
            Stay
          </Button>
          <Button variant="ghost" borderRadius="xl">
            Experiences
          </Button>
        </HStack>
        <UserMenu />
      </HStack>
      <HStack
        maxW="3/5"
        rounded="4xl"
        mx="auto"
        shadow="md"
        border="1px gray.200 solid"
        justifyContent="space-between"
      >
        {Object.keys(filterData.stay).map((key, idx) => {
          return (
            <VStack
              key={idx}
              rounded="xl"
              justifyContent="flex-start"
              _hover={{ bg: "bg.emphasized", rounded: "3xl" }}
              p="3.5"
              gapY="0"
              cursor="pointer"
            >
              <Text fontWeight="bold" fontSize="xs">
                {key}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {filterData.stay[key as keyof typeof filterData.stay]}
              </Text>
            </VStack>
          );
        })}
        <IconButton rounded="full" colorPalette="red" mr="2">
          <FaSearch size={20} />
        </IconButton>
      </HStack>
    </Container>
  );
};

export default NavBar;
