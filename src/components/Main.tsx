import { ChangeEvent, FC, useState } from "react";

import { Button, Flex, Text, Link, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { DisclaimerModel } from "./DisclaimerModel";
import { FilterOptions } from "./FilterOptions";
import { FreeRoomsCardList } from "./FreeRoomsCardList";
import { ScrollToTop } from "./autoScrollTop/ScrollToTop";
import { Feedback } from "./Feedback";

const numberDayToStringDay = {
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
};

const isWeekDay = (numberDay: number) => 1 <= numberDay && numberDay <= 5;
const numberDay = new Date().getDay();

export const Main: FC<{}> = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("All");
  const [currentDay, setCurrentDay] = useState<string>(
    isWeekDay(numberDay) ? numberDayToStringDay[numberDay] : "MON"
  );

  const handleSearchTextChange = (e: ChangeEvent<any>) =>
    setSearchText(e.target.value);
  const handleTimeSlotChange = (e: ChangeEvent<any>) =>
    setTimeSlot(e.target.value);
  const handleDayChange = (e: ChangeEvent<any>) =>
    setCurrentDay(e.target.value);
  const handleDeleteTextChange = () => setSearchText("");

  return (
    <Flex direction="column" w="full" h="auto" minH="100vh" bg="gray.100">
      <DisclaimerModel />
      <Flex mt="2" ml={["4", "8"]} justify="space-between" align="center">
        {isWeekDay(numberDay) ? (
          <Text fontSize="sm">hmm.. where to mug?📚📚</Text>
        ) : (
          <Text fontSize="sm">
            Its weekend. Rmb to take a break. Love you💗
          </Text>
        )}
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
        handleDeleteTextChange={handleDeleteTextChange}
        handleSearchTextChange={handleSearchTextChange}
        timeSlot={timeSlot}
        handleTimeSlotChange={handleTimeSlotChange}
        currentDay={currentDay}
        handleDayChange={handleDayChange}
      />
      <FreeRoomsCardList
        searchText={searchText}
        timeSlot={timeSlot}
        stringDay={currentDay}
      />
      <VStack
        direction="column"
        position="fixed"
        bottom={["3", "5"]}
        right={["3", "5"]}
      >
        <Feedback />
        <ScrollToTop />
      </VStack>
    </Flex>
  );
};
