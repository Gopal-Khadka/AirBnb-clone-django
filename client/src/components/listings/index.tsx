import { SimpleGrid } from "@chakra-ui/react";
import HouseCard from "./HouseCard";
import FilterBar from "./FilterBar";
const nums = [1, 2, 3, 4, 5];

const index = () => {
  return (
    <>
      <FilterBar />
      <SimpleGrid columns={{ md: 3, lg: 4, xl: 5 }} gap={2} my={5} px={5}>
        {nums.map((num, idx) => (
          <HouseCard key={idx} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default index;
