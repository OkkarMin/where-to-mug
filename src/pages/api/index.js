import room_occupancy from "../../../data/room_occupancy.json";

export default function handler(req, res) {
  const { query } = req;
  const { currentDay, timeSlot, searchText } = query;

  const rooms = Object.keys(room_occupancy[currentDay]).sort();

  const fliteredRooms = rooms.filter((room) => {
    const hasRoomName = room.includes(searchText.toUpperCase());
    const hasAvailableSlot =
      timeSlot == "ALL" ? true : room_occupancy[currentDay][room][timeSlot];

    return hasRoomName && hasAvailableSlot;
  });

  res.status(200).json(fliteredRooms);
}
