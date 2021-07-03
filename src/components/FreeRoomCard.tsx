import { FC } from "react";

import {
  Badge,
  Box,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export interface IFreeRoomCard {
  timeSlots: Record<string, boolean>;
  room: string;
  room_id: string;
}

export const TimeSlotBadge: FC<{ slot: string; isFree: boolean }> = ({
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
      w="auto"
    >
      {slot}
    </Badge>
  );
};

export const FreeRoomCard: FC<IFreeRoomCard> = ({
  timeSlots,
  room,
  room_id,
}) => {
  return (
    <Box
      w="xs"
      mx="auto"
      mb="4"
      p="4"
      shadow="base"
      rounded="md"
      bg="white"
      _hover={{ shadow: "2xl", textDecoration: "none" }}
    >
      <Box alignContent="center">
        <HStack justify="space-between">
          <Heading as="h1" fontSize="xl">
            {room}
          </Heading>
          <Link
            href={`https://maps.ntu.edu.sg/#/ntu/d386ffa80e4e46f286d17f08/poi/details/${room_id}`}
            isExternal
          >
            <IconButton
              rounded="md"
              backgroundColor="white"
              aria-label="Open this location in NTU Map website"
              icon={<ExternalLinkIcon boxSize="1.5em" />}
            />
          </Link>
        </HStack>
        <SimpleGrid columns={2} mt="4">
          {timeSlots == null ? (
            <div>Not free at all sial</div>
          ) : (
            Object.keys(timeSlots).map((slot: string, i: number) => (
              <TimeSlotBadge key={i} slot={slot} isFree={timeSlots[slot]} />
            ))
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
