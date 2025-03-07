import { Container, Separator, VStack } from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import Listing from "@/components/listings";
import "./globals.css";

const Page = () => {
  return (
    <>
      <NavBar />
      <Separator />
      <Listing />
    </>
  );
};

export default Page;
