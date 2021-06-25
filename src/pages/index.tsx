import { useState } from "react";
import { Text, Flex, SimpleGrid, Spacer } from "@chakra-ui/react";

import { FilterOptions } from "../components/FilterOptions";
import { FreeRoomCard } from "../components/FreeRoomCard";

import room_occupancy from "../../room_occupancy.json";

const numberDayToStringDay = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
};

const Index = () => {
  const numberDay = new Date().getDay();
  const stringDay = numberDayToStringDay[numberDay];
  const rooms = Object.keys(room_occupancy[stringDay]).sort();

  return (
    <Flex
      direction="column"
      w="full"
      h="auto"
      minH="100vh"
      bg="gray.100"
      mb="-4"
    >
      <FilterOptions />
      <SimpleGrid minChildWidth="300px" spacingX="4" mt="1" px={["4", "8"]}>
        {rooms.map((room: string, i: number) => (
          <FreeRoomCard
            key={i}
            timeSlots={room_occupancy[stringDay][room]}
            room={room}
          />
        ))}
      </SimpleGrid>
      <Spacer />
      <Text textAlign="center" fontSize="xs" py="4">
        2021 © Okkar
      </Text>
    </Flex>
  );
};

export default Index;
