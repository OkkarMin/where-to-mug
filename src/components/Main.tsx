import { ChangeEvent, FC, useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import { DisclaimerModel } from "./DisclaimerModel";
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
    <Flex direction="column" w="full" h="auto" minH="100vh" bg="gray.100">
      <DisclaimerModel />
      <Box mt="2" ml={["4", "8"]} align="flex-start">
        <Text fontSize="xs">
          Free room data for{" "}
          <Text display="inline" textDecoration="underline">
            {new Date().toDateString()}
          </Text>
        </Text>
      </Box>
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
