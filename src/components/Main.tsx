import { useState, FC } from "react";
import { Flex, Text, SimpleGrid, Spacer } from "@chakra-ui/react";

import { FreeRoomCard } from "./FreeRoomCard";
import { FilterOptions } from "./FilterOptions";

import room_occupancy from "../../room_occupancy.json";
import { ChangeEvent } from "react";

const numberDayToStringDay = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
};

export const Main: FC<{ numberDay: number }> = ({ numberDay }) => {
  const stringDay = numberDayToStringDay[numberDay];
  const rooms = Object.keys(room_occupancy[stringDay]).sort();

  const [searchText, setSearchText] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("All");

  const handleSearchTextChange = (e: ChangeEvent<any>) =>
    setSearchText(e.target.value);
  const handleTimeSlotChange = (e: ChangeEvent<any>) =>
    setTimeSlot(e.target.value);

  return (
    <Flex
      direction="column"
      w="full"
      h="auto"
      minH="100vh"
      bg="gray.100"
      mb="-4"
    >
      <FilterOptions
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
        timeSlot={timeSlot}
        handleTimeSlotChange={handleTimeSlotChange}
      />
      <SimpleGrid minChildWidth="340px" spacing="4" mt="1" px={["4", "8"]}>
        {rooms
          .filter((room: string) => {
            const hasRoomName = room.includes(searchText.toUpperCase());
            const hasAvailableSlot =
              timeSlot == "All"
                ? true
                : room_occupancy[stringDay][room][timeSlot];

            return hasRoomName && hasAvailableSlot;
          })
          .map((room: string, i: number) => (
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
