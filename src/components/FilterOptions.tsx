import React, {
  FC,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";

import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
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
import { BiBuildings } from "react-icons/bi";

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

const clusterList = [
  "ALL",
  "ADM",
  "ARC",
  "BIE",
  "CBE",
  "HSS",
  "LHS",
  "NIE",
  "NS",
  "SBS",
  "SPMS",
  "SS",
  "WKWSCI",
  "OTHERS",
];

export const FilterOptions: FC<{
  timeSlot: string;
  handleTimeSlotChange: MouseEventHandler;
  currentDay: string;
  handleDayChange: MouseEventHandler;
  searchText: string;
  handleSearchTextChange: ChangeEventHandler;
  handleSearchTextButton: MouseEventHandler;
  handleSearchTextEnterKey: KeyboardEventHandler;
  cluster: string;
  handleClusterChange: MouseEventHandler;
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
    cluster,
    handleClusterChange,
  }) => {
    return (
      <Flex direction={["column", "row"]} mt="2" px={["4", "8"]} align="center">
        <Menu autoSelect={false} isLazy={true}>
          <MenuButton
            as={Button}
            colorScheme="linkedin"
            size="md"
            width={["full", "25vw"]}
            leftIcon={<BiBuildings />}
            rightIcon={<ChevronDownIcon />}
            margin="5px"
          >
            {cluster}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Cluster">
              {clusterList.map((selectedCluster: string, i: number) => (
                <MenuItem
                  value={selectedCluster}
                  key={i}
                  icon={<BiBuildings />}
                  onClick={handleClusterChange}
                >
                  {selectedCluster}
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

        <InputGroup width={["full", "50vw"]} margin="5px">
          <Input
            borderColor="linkedinBlue"
            colorScheme="linkedin"
            onChange={handleSearchTextChange}
            onKeyUp={handleSearchTextEnterKey}
            placeholder="Room name... AMDLAB | ART-01-19"
            value={searchText}
            variant="filled"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search button"
              onClick={handleSearchTextButton}
              rounded="md"
              size="sm"
            >
              <SearchIcon />
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </Flex>
    );
  }
);
