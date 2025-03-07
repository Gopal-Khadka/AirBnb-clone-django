import { HStack, Button } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaGlobe } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";

const UserMenu = () => {
  return (
    <HStack gap={6}>
      <HStack>
        <Button fontSize={14} variant="ghost" padding={1} rounded="2xl">
          Airbnb your home
        </Button>
        <FaGlobe size={20} />
      </HStack>
      <HStack>
        <Button
          padding={3}
          borderRadius={5}
          variant="ghost"
          rounded="xl"
          borderColor="gray.300"
        >
          <GiHamburgerMenu />
          <CgProfile />
        </Button>
        <ThemeToggle />
      </HStack>
    </HStack>
  );
};

export default UserMenu;
