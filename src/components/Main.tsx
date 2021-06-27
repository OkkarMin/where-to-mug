import { ChangeEvent, FC, useState } from "react";
import { Button, Flex, Spacer, Text, Link, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { DisclaimerModel } from "./DisclaimerModel";
import { FreeRoomsCardList } from "./FreeRoomsCardList";
import { FilterOptions } from "./FilterOptions";
import ScrollArrow from "../components/autoScrollTop/ScrollArrow";

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
      <Flex mt="2" ml={["4", "8"]} justify="space-between" align="center">
        <Text fontSize="sm">
          Free room data for{" "}
          <span style={{ textDecoration: "underline" }}>
            {fullDayList[day]}
          </span>
        </Text>
        <Link href="https://maps.ntu.edu.sg/" isExternal>
          <Button
            rightIcon={<ChevronRightIcon />}
            fontSize="sm"
            textDecoration="underline"
            marginRight={["", "10"]}
          >
            To NTU Map
          </Button>
        </Link>
      </Flex>
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
      <Box position="fixed" bottom={["3", "5"]} right={["3", "5"]}>
        <ScrollArrow />
      </Box>

      <Spacer />
      <Text textAlign="center" fontSize="xs" py="4">
        2021 © Okkar
      </Text>
    </Flex>
  );
};
