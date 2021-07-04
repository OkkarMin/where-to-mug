import React, {
  FC,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

import {
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  ChevronDownIcon,
  SearchIcon,
  TimeIcon,
} from "@chakra-ui/icons";

const timeSlots = [
  "ALL",
  "0830-0920",
  "0930-1020",
  "1030-1120",
  "1130-1220",
  "1230-1320",
  "1330-1420",
  "1430-1520",
  "1530-1620",
  "1630-1720",
  "1730-1820",
  "1830-1920",
  "1930-2020",
  "2030-2120",
  "2130-2220",
];

const dayList = ["MON", "TUE", "WED", "THU", "FRI"];

export const FilterOptions: FC<{
  timeSlot: string;
  handleTimeSlotChange: MouseEventHandler;
  currentDay: string;
  handleDayChange: MouseEventHandler;
  searchText: string;
  handleSearchTextChange: ChangeEventHandler;
  handleSearchTextButton: MouseEventHandler;
  handleSearchTextEnterKey: KeyboardEventHandler;
}> = React.memo(
  ({
    timeSlot,
    handleTimeSlotChange,
    currentDay,
    handleDayChange,
    searchText,
    handleSearchTextChange,
    handleSearchTextButton,
    handleSearchTextEnterKey,
  }) => {
    return (
      <Flex direction={["column", "row"]} mt="2" px={["4", "8"]} align="center">
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="linkedin"
            size="md"
            width={["full", "25vw"]}
            leftIcon={<CalendarIcon />}
            rightIcon={<ChevronDownIcon />}
            margin="5px"
          >
            {currentDay}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Day">
              {dayList.map((selectedDay: string, i: number) => (
                <MenuItem
                  value={selectedDay}
                  key={i}
                  icon={<CalendarIcon />}
                  onClick={handleDayChange}
                >
                  {selectedDay}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="linkedin"
            size="md"
            width={["full", "25vw"]}
            leftIcon={<TimeIcon />}
            rightIcon={<ChevronDownIcon />}
            margin="5px"
          >
            {timeSlot}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Timeslot">
              {timeSlots.map((slot: string, i: number) => (
                <MenuItem
                  value={slot}
                  key={i}
                  icon={<TimeIcon />}
                  onClick={handleTimeSlotChange}
                >
                  {slot}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
        <HStack width={["full", "auto"]} margin="5px">
          <Input
            borderColor="linkedinBlue"
            colorScheme="linkedin"
            onChange={handleSearchTextChange}
            onKeyUp={handleSearchTextEnterKey}
            placeholder="Room name... AMDLAB | ART-01-19"
            value={searchText}
            variant="filled"
            width={["full", "50vw"]}
          />
          <IconButton
            aria-label="Search button"
            onClick={handleSearchTextButton}
            rounded="md"
            size="md"
          >
            <SearchIcon />
          </IconButton>
        </HStack>
      </Flex>
    );
  }
);
