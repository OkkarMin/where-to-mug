import { Badge, HStack } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

export const BadgeTimeSlotsHeader = () => {
  return (
    <HStack p="4" overflow="scroll">
      {Array.from(Array(20)).map((_, i: number) => (
        <Badge
          key={i}
          px="3"
          py="1"
          my="2"
          rounded="md"
          textTransform="uppercase"
          colorScheme="linkedin"
          variant={i == 0 ? "solid" : "subtle"}
          shadow={i == 0 ? "lg" : "none"}
        >
          <TimeIcon mr="2" />
          {i == 0 ? "Now" : "1230-1330"}
        </Badge>
      ))}
    </HStack>
  );
};
