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
  "0830-0930",
  "0930-1030",
  "1030-1130",
  "1130-1230",
  "1230-1330",
  "1330-1430",
  "1430-1530",
  "1530-1630",
  "1630-1730",
  "1730-1830",
  "1830-1930",
  "1930-2030",
  "2030-2130",
  "2130-2230",
];

const Index = () => {
  const rooms = Object.keys(room_occupancy.MON);

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
            placeholder="TR+0"
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
