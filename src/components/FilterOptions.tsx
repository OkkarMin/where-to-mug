import React, { FC, ChangeEventHandler, MouseEventHandler } from "react";

import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CalendarIcon, ChevronDownIcon, TimeIcon } from "@chakra-ui/icons";

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
  handleSearchTextChange: ChangeEventHandler;
  timeSlot: string;
  handleTimeSlotChange: MouseEventHandler;
  currentDay: string;
  handleDayChange: MouseEventHandler;
}> = React.memo(
  ({
    handleSearchTextChange,
    timeSlot,
    handleTimeSlotChange,
    currentDay,
    handleDayChange,
  }) => {
    return (
      <Flex direction={["column", "row"]} mt="2" px={["4", "8"]} align="center">
        <Menu autoSelect={false} isLazy={true}>
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
        <Menu autoSelect={false} isLazy={true}>
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
          <MenuList
            height={["70vh", "70vh", "60vh", "auto"]}
            overflowY={["auto", "auto", "auto", "unset"]}
          >
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

        <Input
          borderColor="linkedinBlue"
          colorScheme="linkedin"
          onChange={handleSearchTextChange}
          placeholder="Room name... AMDLAB | ART-01-19"
          variant="filled"
          width={["full", "50vw"]}
          margin="5px"
        />
      </Flex>
    );
  }
);
