import { useState } from "react";
import { Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";

import { FilterOptions } from "../components/FilterOptions";
import { FreeRoomCard } from "../components/FreeRoomCard";

import room_occupancy from "../../room_occupancy.json";
import { WeekendMessage } from "./components/WeekendMessage";

const numberDayToStringDay = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
};

const isWeekDay = (numberDay: number) => numberDay <= 5;

// const numberDay = new Date().getDay();
// !!! Remove this hardcoded line in production
const numberDay = 6;

let stringDay: string, rooms: any[];
if (isWeekDay(numberDay)) {
  stringDay = numberDayToStringDay[numberDay];
  rooms = Object.keys(room_occupancy[stringDay]).sort();
}

const Index = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("All");

  const handleSearchTextChange = (e: any) => setSearchText(e.target.value);
  const handleTimeSlotChange = (e: any) => setTimeSlot(e.target.value);

  return isWeekDay(numberDay) ? (
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
  ) : (
    <WeekendMessage />
  );
};

export default Index;
