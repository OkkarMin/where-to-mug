import React, { FC, useRef } from "react";
import Image from "next/image";

import {
  Button,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { TimeSlotBadge } from "./FreeRoomCard";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const DisclaimerModel: FC<{}> = React.memo(() => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const headerRef = useRef();

  return (
    <Modal
      initialFocusRef={headerRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent ref={headerRef}>
        <Image
          width="300"
          height="200"
          layout="responsive"
          src="/assets/study_modal_image.svg"
          alt="An illustration of a girl sitting down studying. With book open and pen on her right hand"
        />
        <ModalBody>
          Ever wonder which tutorial room is free* and which is not? 🤨 This
          tool could help you find out your dream tutorial room 🥳
          <br />
          <br />
          Search which tutorial room is free by:
          <UnorderedList>
            <ListItem>day of the week</ListItem>
            <ListItem>room name and</ListItem>
            <ListItem>time slot</ListItem>
          </UnorderedList>
          <br />
          <VStack>
            <Text>
              <TimeSlotBadge isFree={true} slot="0830-0920" /> 🙆🏻‍♀
            </Text>
            <Text>
              <TimeSlotBadge isFree={false} slot="0830-0920" /> 🙅🏻‍♀️
            </Text>
          </VStack>
          <br />
          Data is obtained from{" "}
          <Link
            color="linkedin.500"
            href="https://github.com/kenrick95/plan/tree/master/back_end/data/parsed/json"
            isExternal
          >
            here <ExternalLinkIcon />{" "}
          </Link>
          and wrangled using Python to data shape we want. See source code for
          this app{" "}
          <Link
            color="linkedin.500"
            href="https://github.com/OkkarMin/which-room-free"
            isExternal
          >
            here <ExternalLinkIcon />
          </Link>
          <br />
          <br />
          *initial data is from NTU course registration.
          <br />
          <br />
          The tool is provided AS-IS. We take no responsibility for any events
          arising from use of this tool 😊
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="linkedin" onClick={onClose}>
            Understood 👌
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
