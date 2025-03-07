import { Button, HStack, Text } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";
import { FaAirbnb } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" m={5}>
      <HStack>
        <FaAirbnb size={30} color="red" />
        <Text fontWeight="bold" color="red" fontSize={24}>
          airbnb
        </Text>
      </HStack>
      <HStack>
        <Button variant="ghost" borderRadius="xl">
          Stay
        </Button>
        <Button variant="ghost" borderRadius="xl">
          Experiences
        </Button>
      </HStack>
      <HStack>
        <Button padding={3} borderRadius={5} variant="ghost">
          <GiHamburgerMenu />
          <CgProfile />
        </Button>
        <ThemeToggle />
      </HStack>
    </HStack>
  );
};

export default NavBar;
