import { ChangeEvent, FC, useState } from "react";
import { Flex, Text, Spacer } from "@chakra-ui/react";

import { FreeRoomsCardList } from "./FreeRoomsCardList";
import { FilterOptions } from "./FilterOptions";

const numberDayToStringDay = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
};

export const Main: FC<{ numberDay: number }> = ({ numberDay }) => {
  const stringDay = numberDayToStringDay[numberDay];

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
      <FreeRoomsCardList
        searchText={searchText}
        timeSlot={timeSlot}
        stringDay={stringDay}
      />
      <Spacer />
      <Text textAlign="center" fontSize="xs" py="4">
        2021 © Okkar
      </Text>
    </Flex>
  );
};
