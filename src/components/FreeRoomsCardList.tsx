import { FC } from "react";

import { useState, useEffect } from "react";

import { Spinner, SimpleGrid, Box } from "@chakra-ui/react";

import { server } from "../../config";
import { FreeRoomCard } from "./FreeRoomCard";
import { RoomNotFound } from "./RoomNotFound";

import room_occupancy from "../../data/room_occupancy.json";
import room_ids from "../../data/room_ids.json";

export const FreeRoomsCardList: FC<{
  searchText: string;
  timeSlot: string;
  currentDay: string;
}> = ({ searchText, timeSlot, currentDay }) => {
  const [fliteredRooms, setFliteredRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const URLsearchText = encodeURIComponent(searchText);

  useEffect(() => {
    const api = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${server}/api?currentDay=${currentDay}&timeSlot=${timeSlot}&searchText=${URLsearchText}`
        );
        const data = await response.json();
        setFliteredRooms(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };
    api();
  }, [searchText, timeSlot, currentDay]);

  const haveRooms = fliteredRooms.length > 0;

  return loading ? (
    <Box mt="20" width="full" align="center">
      {<Spinner size="xl" />}
    </Box>
  ) : haveRooms ? (
    <SimpleGrid minChildWidth="340px" spacing="2" mt="4" px={["4", "8"]}>
      {fliteredRooms.map((room, i) => (
        <FreeRoomCard
          key={i}
          timeSlots={room_occupancy[currentDay][room]}
          room={room}
          room_id={room_ids[room]}
        />
      ))}
    </SimpleGrid>
  ) : (
    <RoomNotFound />
  );
};
