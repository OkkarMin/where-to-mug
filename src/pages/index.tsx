import {
  Text,
  Box,
  Input,
  HStack,
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

import { FreeRoomCard, IFreeRoomCard } from "../components/FreeRoomCard";

const data = [
  { location: "South Spine", time: "0830-0930", room: "SWLAB3" },
  { location: "North Spine", time: "1230-1330", room: "TR+9" },
  { location: "North Spine", time: "1530-1620", room: "TR+32" },
  { location: "South Spine", time: "0830-0930", room: "SWLAB3" },
  { location: "North Spine", time: "1230-1330", room: "TR+9" },
  { location: "North Spine", time: "1530-1620", room: "TR+32" },
  { location: "South Spine", time: "0830-0930", room: "SWLAB3" },
  { location: "North Spine", time: "1230-1330", room: "TR+9" },
  { location: "North Spine", time: "1530-1620", room: "TR+32" },
  { location: "South Spine", time: "0830-0930", room: "SWLAB3" },
  { location: "North Spine", time: "1230-1330", room: "TR+9" },
  { location: "North Spine", time: "1530-1620", room: "TR+32" },
  { location: "South Spine", time: "0830-0930", room: "SWLAB3" },
  { location: "North Spine", time: "1230-1330", room: "TR+9" },
  { location: "North Spine", time: "1530-1620", room: "TR+32" },
  { location: "South Spine", time: "0830-0930", room: "SWLAB3" },
  { location: "North Spine", time: "1230-1330", room: "TR+9" },
  { location: "North Spine", time: "1530-1620", room: "TR+32" },
];

const timeSlots = [
  "0830-0930",
  "0930-1030",
  "1030-1130",
  "1130-1230",
  "1230-1330",
  "1330-1430",
  "1430-1530",
  "1630-1730",
  "1730-1830",
  "1830-1930",
  "1930-2030",
];

const Index = () => {
  return (
    <Flex
      direction="column"
      w="full"
      h="auto"
      minH="100vh"
      bg="gray.100"
      mb="-4"
    >
      <HStack p={["4", "8"]}>
        <Input
          borderColor="#01A0DC"
          placeholder="Enter room name"
          colorScheme="linkedin"
          variant="filled"
        />

        <Text>or...</Text>

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
      </HStack>
      <SimpleGrid minChildWidth="300px" spacingX="4" mt="1" px={["4", "8"]}>
        {data.map((item: IFreeRoomCard, i: number) => (
          <FreeRoomCard
            key={i}
            location={item.location}
            time={item.time}
            room={item.room}
          ></FreeRoomCard>
        ))}
      </SimpleGrid>
      <Spacer />
      <Box textAlign="center" fontSize="xs" py="4">
        2021 © Okkar, YingSheng, Raymond
      </Box>
    </Flex>
  );
};

export default Index;
