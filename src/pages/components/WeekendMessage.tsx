import { Container, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export const WeekendMessage = () => {
  return (
    <Flex
      direction="column"
      w="full"
      h="auto"
      minH="100vh"
      mb="-4"
      align="center"
      justify="center"
    >
      <Container>
        <Image
          width="400"
          height="350"
          layout="responsive"
          src="/assets/weekend_chill.svg"
        />
        <Heading as="h1" textAlign="center">
          It is the weekendssss! Rest up and come back on Monday to check
          which-room-free 😊
        </Heading>
      </Container>
    </Flex>
  );
};
