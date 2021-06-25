import { Container, Box } from "@chakra-ui/react";

import { BadgeTimeSlotsHeader } from "../components/BadgeTimeSlotsHeader";
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

const Index = () => {
  return (
    <Box w="full" h="auto" bg="gray.100" mb="-4">
      <BadgeTimeSlotsHeader />
      <Container>
        {data.map((item: IFreeRoomCard, i: number) => (
          <FreeRoomCard
            key={i}
            location={item.location}
            time={item.time}
            room={item.room}
          ></FreeRoomCard>
        ))}
      </Container>
      <Box textAlign="center" fontSize="xs" py="4">
        2021 © Okkar, YingSheng, Raymond
      </Box>
    </Box>
  );
};

export default Index;
