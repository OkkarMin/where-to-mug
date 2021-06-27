import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/layout";

import { FreeRoomCard } from "./FreeRoomCard";

import room_occupancy from "../../room_occupancy.json";

export const FreeRoomsCardList: FC<{
  searchText: string;
  timeSlot: string;
  stringDay: string;
}> = ({ searchText, timeSlot, stringDay }) => {
  const rooms = Object.keys(room_occupancy[stringDay]).sort();

  return (
    <SimpleGrid minChildWidth="340px" spacing="4" mt="1" px={["4", "8"]}>
      {rooms
        .filter((room: string) => {
          const hasRoomName = room.includes(searchText.toUpperCase());
          const hasAvailableSlot =
            timeSlot == "All"
              ? true
              : room_occupancy[stringDay][room][timeSlot];

          return hasRoomName && hasAvailableSlot;
        })
        .map((room: string, i: number) => (
          <FreeRoomCard
            key={i}
            timeSlots={room_occupancy[stringDay][room]}
            room={room}
          />
        ))}
    </SimpleGrid>
  );
};
