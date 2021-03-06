import React, { useRef } from "react";
import * as Sentry from "@sentry/nextjs";

import {
  Button,
  Circle,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { VscFeedback } from "react-icons/vsc";

import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const MotionBox = motion(Circle);

export const Feedback = React.memo(() => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  function validateMsg(value) {
    let error;
    if (!value) {
      error = "Description is required";
    }
    return error;
  }

  return (
    <>
      <MotionBox whileHover={{ scale: 1.15 }}>
        <Circle
          as="button"
          className="scrollTop"
          backgroundColor="linkedinBlue"
          _hover={{ shadow: "xl" }}
          onClick={onOpen}
          size="50px"
        >
          <VscFeedback size="30px" color="white" />
        </Circle>
      </MotionBox>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values) => {
            JSON.stringify(values);
            try {
              emailjs
                .send(
                  process.env.NEXT_PUBLIC_SERVICE_ID,
                  process.env.NEXT_PUBLIC_TEMPLATE_ID,
                  values,
                  process.env.NEXT_PUBLIC_USER_ID
                )
                .then(() => {
                  toast({
                    title: "Feedback sent",
                    description: "feedback successfully sent. thank you🙏",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                });
            } catch (error) {
              toast({
                title: "Feedback not sent",
                description:
                  "oh no.. something went wrong😌 please contact us on our github.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
              });
              Sentry.captureException(error);
            } finally {
              onClose();
            }
          }}
        >
          {() => (
            <Form>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Tell us your feedback</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel marginTop="2" htmlFor="name">
                          Your Name
                        </FormLabel>
                        <Input {...field} id="name" placeholder="Jane Doe" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel marginTop="2" htmlFor="email">
                          Your Email
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="example@domain.com"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="message" validate={validateMsg}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.message && form.touched.message}
                      >
                        <FormLabel marginTop="2" htmlFor="message">
                          Description*
                        </FormLabel>
                        <Textarea
                          {...field}
                          ref={initialRef}
                          id="message"
                          placeholder="Let us know your.. feature request | feedback"
                        />
                        <FormErrorMessage>
                          {form.errors.message}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>

                <ModalFooter>
                  <Button type="submit" colorScheme="blue" mr={3}>
                    Submit
                  </Button>

                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
});
