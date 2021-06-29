import { FC, ChangeEventHandler, MouseEventHandler } from "react";

import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { TimeIcon, ChevronDownIcon, CalendarIcon } from "@chakra-ui/icons";

const timeSlots = [
  "All",
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
  searchText: string;
  handleSearchTextChange: ChangeEventHandler;
  timeSlot: string;
  handleTimeSlotChange: MouseEventHandler;
  currentDay: string;
  handleDayChange: MouseEventHandler;
}> = ({
  searchText,
  handleSearchTextChange,
  timeSlot,
  handleTimeSlotChange,
  currentDay,
  handleDayChange,
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
      <Input
        value={searchText}
        onChange={handleSearchTextChange}
        borderColor="linkedinBlue"
        placeholder="Room name... AMDLAB | ART-01-19"
        colorScheme="linkedin"
        variant="filled"
        margin="5px"
        width={["full", "50vw"]}
      />
    </Flex>
  );
};
