import { SimpleGrid } from "@chakra-ui/react";
import HouseCard from "./HouseCard";
import FilterBar from "./FilterBar";
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const index = () => {
  return (
    <>
      <FilterBar />
      <SimpleGrid
        columns={{ md: 3, lg: 4, xl: 5 }}
        gapX={2}
        gapY={5}
        my={5}
        px={5}
      >
        {nums.map((num, idx) => (
          <HouseCard key={idx} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default index;
