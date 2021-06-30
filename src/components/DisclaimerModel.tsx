import { FC, useRef } from "react";
import Image from "next/image";

import {
  Button,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { TimeSlotBadge } from "./FreeRoomCard";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const DisclaimerModel: FC<{}> = () => {
  const btnRef = useRef();
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal
      initialFocusRef={btnRef}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Thank you for checking out
          <Text textDecoration="underline">Where To Mug</Text>
        </ModalHeader>
        <Image
          width="300"
          height="200"
          layout="responsive"
          src="/assets/study_modal_image.svg"
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
          <Button ref={btnRef} colorScheme="linkedin" onClick={onClose}>
            Understood 👌
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
