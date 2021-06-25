import { FC } from "react";
import { Flex, Badge, Box, Text, Heading, Icon } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { IoLocationOutline } from "react-icons/io5";

export interface IFreeRoomCard {
  location: string;
  time: string;
  room: string;
}

const locationColors = {
  "North Spine": "red",
  "South Spine": "green",
};

export const FreeRoomCard: FC<IFreeRoomCard> = ({ location, time, room }) => {
  return (
    <Box w="full" mx="auto" mb="4" p="4" shadow="base" rounded="md" bg="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Badge
          variant="outline"
          colorScheme={locationColors[location]}
          rounded="md"
        >
          <Icon as={IoLocationOutline} mr="1" />
          {location}
        </Badge>
        <Badge
          px={3}
          py={1}
          rounded="md"
          textTransform="uppercase"
          colorScheme="linkedin"
          variant="subtle"
        >
          <TimeIcon mr="2" />
          {time}
        </Badge>
      </Flex>
      <Box>
        <Heading as="h1" fontSize="lg" mt="2">
          {room}
        </Heading>
      </Box>
    </Box>
  );
};
