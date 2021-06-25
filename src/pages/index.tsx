import {
  Text,
  Input,
  HStack,
  VStack,
  Flex,
  Button,
  SimpleGrid,
  Menu,
  MenuItem,
  MenuButton,
  MenuGroup,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon, TimeIcon } from "@chakra-ui/icons";

import { FreeRoomCard } from "../components/FreeRoomCard";

import room_occupancy from "../../room_occupancy.json";

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

const Index = () => {
  const rooms = Object.keys(room_occupancy.MON).sort();

  return (
    <Flex
      direction="column"
      w="full"
      h="auto"
      minH="100vh"
      bg="gray.100"
      mb="-4"
    >
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
      <SimpleGrid minChildWidth="300px" spacingX="4" mt="1" px={["4", "8"]}>
        {rooms.map((room: string, i: number) => (
          <FreeRoomCard
            key={i}
            timeSlots={room_occupancy.MON[room]}
            room={room}
          />
        ))}
      </SimpleGrid>
      <Spacer />
      <Text textAlign="center" fontSize="xs" py="4">
        2021 © Okkar
      </Text>
    </Flex>
  );
};

export default Index;
