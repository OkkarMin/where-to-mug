import { FC } from "react";

import Image from "next/image";

import { Box } from "@chakra-ui/react";

export const RoomNotFound: FC<{}> = () => {
  return (
    <Box align="center" width="auto">
      <Box mt="10" boxSize="xs">
        <Image
          width="300"
          height="200"
          layout="responsive"
          src="/assets/room_not_found_image.svg"
          alt="Room not found image"
        />
      </Box>
    </Box>
  );
};
