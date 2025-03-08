"use client";
import { Card, Badge, Image, Text, HStack, IconButton } from "@chakra-ui/react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const HouseCard = () => {
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Card.Header p={0} position="relative">
        <Badge
          position="absolute"
          top="2"
          left="2"
          fontSize="sm"
          px="2"
          py="1"
          rounded="xl"
        >
          Guest favorite
        </Badge>
        <IconButton
          position="absolute"
          top="2"
          right="2"
          variant="subtle"
          p="1"
          rounded="full"
          color="red.500"
          size="sm"
          onClick={() => setLiked((prev) => !prev)}
        >
          {liked ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
        </IconButton>

        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
        />
      </Card.Header>
      <Card.Body gapY="0" px={3} py="1.5">
        <HStack justifyContent="space-between">
          <Text fontSize="md" fontWeight="bolder">
            Bangkok,Thailand
          </Text>
          <HStack gap="2">
            <FaStar />
            4.93
          </HStack>
        </HStack>
        <Text color="fg.subtle">2,212 kilometers away</Text>
        <Text color="fg.subtle">April 1-6</Text>
      </Card.Body>
      <Card.Footer gap="2" flexDir="row" fontSize="sm" p="1.5">
        <Text fontWeight="bold" fontSize="md">
          $109
        </Text>
        night
      </Card.Footer>
    </Card.Root>
  );
};

export default HouseCard;
