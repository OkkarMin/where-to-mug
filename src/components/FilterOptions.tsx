import { FC } from "react";
import {
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TimeIcon, ChevronDownIcon } from "@chakra-ui/icons";

const timeSlots = [
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

export const FilterOptions: FC<{}> = () => {
  return (
    <HStack p={["4", "8"]} align="flex-end">
      <VStack w="full" align="center">
        <Text>Enter room name</Text>
        <Input
          borderColor="#01A0DC"
          placeholder="TR+13"
          colorScheme="linkedin"
          variant="filled"
        />
      </VStack>

      <Text>or...</Text>

      <VStack w="full" align="center">
        <Text>Select timeslot</Text>
        <Menu placement="auto">
          <MenuButton
            as={Button}
            colorScheme="linkedin"
            size="md"
            width="full"
            leftIcon={<TimeIcon />}
            rightIcon={<ChevronDownIcon />}
          >
            Timeslot
          </MenuButton>
          <MenuList>
            <MenuGroup title="Timeslot">
              {timeSlots.map((slot: string, i: number) => (
                <MenuItem key={i} icon={<TimeIcon />}>
                  {slot}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
      </VStack>
    </HStack>
  );
};
