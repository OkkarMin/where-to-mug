import { useState } from "react";
import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";

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

const isWeekDay = (numberDay: number) => numberDay <= 5;

const numberDay = new Date().getDay();

let stringDay: string, rooms: any[];
if (isWeekDay(numberDay)) {
  stringDay = numberDayToStringDay[numberDay];
  rooms = Object.keys(room_occupancy[stringDay]).sort();
}

const Index = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchTextChange = (e: any) => setSearchText(e.target.value);

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
      />
      <SimpleGrid minChildWidth="300px" spacingX="4" mt="1" px={["4", "8"]}>
        {rooms
          .filter((room: string) => room.includes(searchText.toUpperCase()))
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
    <Flex
      direction="column"
      w="full"
      h="auto"
      minH="100vh"
      bg="gray.100"
      mb="-4"
      align="center"
      justify="center"
    >
      <Container>
        <Heading as="h1" textAlign="center">
          It is the weekendssss! Rest up and come back on Monday 😊
        </Heading>
      </Container>
    </Flex>
  );
};

export default Index;
