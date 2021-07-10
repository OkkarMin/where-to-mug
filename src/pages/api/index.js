import Fuse from "fuse.js";

import room_occupancy from "../../../data/room_occupancy.json";
import cluster_data from "../../../data/rooms_with_cluster.json";

export default function handler(req, res) {
  const { currentDay, timeSlot, searchText, cluster } = req.query;

  const rooms = Object.keys(room_occupancy[currentDay]).sort();

  const fliteredRooms = rooms.filter((room) => {
    const hasAvailableSlot =
      timeSlot == "ALL" ? true : room_occupancy[currentDay][room][timeSlot];
    const isInTargetCluster =
      cluster == "ALL" ? true : cluster_data[room] == cluster;

    return hasAvailableSlot && isInTargetCluster;
  });

  const fuse = new Fuse(fliteredRooms, {
    /**
     * @see https://fusejs.io/api/options.html
     * 0.35 is the most suitable value for our usecase after trail and error
     * 0.35 returns relevant result for searchText "tr3", anything lower will return nothing
     */
    threshold: 0.35,
  });

  let matchingLocation = [];
  let finalResult = [];

  if (searchText == "") {
    finalResult = fliteredRooms;
  } else {
    matchingLocation = fuse.search(searchText);
    matchingLocation.map((object) => {
      finalResult.push(object.item);
    });
  }

  return res.status(200).json(finalResult);
}
