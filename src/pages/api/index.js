import Fuse from "fuse.js";

import room_occupancy from "../../../data/room_occupancy.json";
import cluster_data from "../../../data/rooms_with_cluster.json";

export default function handler(req, res) {
  const { query } = req;
  const { currentDay, timeSlot, searchText, cluster } = query;

  const rooms = Object.keys(room_occupancy[currentDay]).sort();

  const fuseOptions = {
    threshold: 0.35,
  };

  const fliteredRooms = rooms.filter((room) => {
    const hasAvailableSlot =
      timeSlot == "ALL" ? true : room_occupancy[currentDay][room][timeSlot];
    const isInTargetCluster =
      cluster == "ALL" ? true : cluster_data[room] == cluster;

    return hasAvailableSlot && isInTargetCluster;
  });

  const fuse = new Fuse(fliteredRooms, fuseOptions);

  let matchingLocation = [];
  let finalResult = [];

  if (searchText == "") {
    finalResult = fliteredRooms;
  } else {
    matchingLocation = fuse.search(searchText);
    matchingLocation.map((object, _) => {
      finalResult.push(object.item);
    });
  }

  return res.status(200).json(finalResult);
}
