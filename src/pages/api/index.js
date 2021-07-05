import room_occupancy from "../../../data/room_occupancy.json";
import cluster_data from "../../../data/rooms_with_cluster.json";

export default function handler(req, res) {
  const { query } = req;
  const { currentDay, timeSlot, searchText, cluster } = query;

  const rooms = Object.keys(room_occupancy[currentDay]).sort();

  const fliteredRooms = rooms.filter((room) => {
    const hasRoomName = room.includes(searchText.toUpperCase());
    const hasAvailableSlot =
      timeSlot == "ALL" ? true : room_occupancy[currentDay][room][timeSlot];
    const isInTargetCluster =
      cluster == "ALL" ? true : cluster_data[room] == cluster;

    return hasRoomName && hasAvailableSlot && targetCluster;
  });

  return res.status(200).json(fliteredRooms);
}
