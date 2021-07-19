import React, { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";

import {
  Button,
  Checkbox,
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
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isChecked, setIsChecked] = useState(true);

  const headerRef = useRef();

  // Upon page load, check if the disclaimer should be shown. If it should,
  // set the state to true.
  useEffect(() => {
    const shouldShowDisclaimer = JSON.parse(
      localStorage.getItem("shouldShowDisclaimer")
    );

    shouldShowDisclaimer == null && onOpen(); // very time first user visit to site
    shouldShowDisclaimer && onOpen(); // user visited site before and checked box
  }, []);

  // On button click, set localStorage to true or false depending on the state
  // of the checkbox and close the disclaimer modal.
  function handleClick() {
    localStorage.setItem("shouldShowDisclaimer", JSON.stringify(!isChecked));
    onClose();
  }

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
            <ListItem>room name</ListItem>
            <ListItem>time slot</ListItem>
            <ListItem>cluster</ListItem>
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
        <ModalFooter justifyContent="space-between">
          <Checkbox
            isChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            colorScheme="linkedin"
          >
            I don't want to see this again
          </Checkbox>

          <Button colorScheme="linkedin" onClick={handleClick}>
            Understood 👌
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
