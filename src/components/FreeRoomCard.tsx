import { FC } from "react";
import { Flex, Badge, Box, Heading } from "@chakra-ui/react";
import { NotAllowedIcon, TimeIcon } from "@chakra-ui/icons";

export interface IFreeRoomCard {
  timeSlots: Record<string, boolean>;
  room: string;
}

const TimeSlotBadge: FC<{ slot: string; isFree: boolean }> = ({
  slot,
  isFree,
}) => {
  return (
    <Badge
      px={3}
      py={1}
      m="1"
      rounded={isFree ? "full" : "xs"}
      textTransform="uppercase"
      colorScheme={isFree ? "linkedin" : "red"}
      variant="subtle"
      w="110px"
    >
      {isFree ? <TimeIcon mr="2" /> : <NotAllowedIcon mr="2" />}
      {slot}
    </Badge>
  );
};

export const FreeRoomCard: FC<IFreeRoomCard> = ({ timeSlots, room }) => {
  return (
    <Box
      w="full"
      mx="auto"
      mb="4"
      p="4"
      shadow="base"
      rounded="md"
      bg="#F8F8FF"
      _hover={{ shadow: "2xl" }}
    >
      <Box alignContent="center">
        <Heading as="h1" fontSize="xl">
          {room}
        </Heading>
        <Flex mt="4" justify="space-around" wrap="wrap">
          {Object.keys(timeSlots).map((slot: string, i: number) => (
            <TimeSlotBadge key={i} slot={slot} isFree={timeSlots[slot]} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
