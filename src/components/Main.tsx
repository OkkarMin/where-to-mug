import { ChangeEvent, FC, useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import { DisclaimerModel } from "./DisclaimerModel";
import { FreeRoomsCardList } from "./FreeRoomsCardList";
import { FilterOptions } from "./FilterOptions";

const fullDayList = {
  MON: "Monday",
  TUE: "Tuesday",
  WED: "Wednesday",
  THU: "Thursday",
  FRI: "Friday",
};

export const Main = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("All");
  const [day, setDay] = useState<string>("MON");

  const handleSearchTextChange = (e: ChangeEvent<any>) =>
    setSearchText(e.target.value);
  const handleTimeSlotChange = (e: ChangeEvent<any>) =>
    setTimeSlot(e.target.value);
  const handleDayChange = (e: ChangeEvent<any>) => setDay(e.target.value);

  return (
    <Flex direction="column" w="full" h="auto" minH="100vh" bg="gray.100">
      <DisclaimerModel />
      <Box mt="2" ml={["4", "8"]} align="flex-start">
        <Text fontSize="xs">
          Free room data for{" "}
          <span style={{ textDecoration: "underline" }}>
            {fullDayList[day]}
          </span>
        </Text>
      </Box>
      <FilterOptions
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
        timeSlot={timeSlot}
        handleTimeSlotChange={handleTimeSlotChange}
        day={day}
        handleDayChange={handleDayChange}
      />
      <FreeRoomsCardList
        searchText={searchText}
        timeSlot={timeSlot}
        stringDay={day}
      />
      <Spacer />
      <Text textAlign="center" fontSize="xs" py="4">
        2021 © Okkar
      </Text>
    </Flex>
  );
};
