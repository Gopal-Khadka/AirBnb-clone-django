import { Button, HStack, Text } from "@chakra-ui/react";
import Branding from "./Branding";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
