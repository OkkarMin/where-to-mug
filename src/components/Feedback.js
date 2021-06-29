import React from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  FormErrorMessage,
  useToast,
  Circle,
  Textarea,
} from "@chakra-ui/react";
import { VscFeedback } from "react-icons/vsc";

import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const MotionBox = motion(Circle);

const Feedback = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function validateSubject(value) {
    let error;
    if (!value) {
      error = "Subject is required";
    }
    return error;
  }

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validateMsg(value) {
    let error;
    if (!value) {
      error = "Message is required";
    }
    return error;
  }

  const sendEmail = (values) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
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
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ subject: "", name: "", email: "", message: "" }}
          onSubmit={(values) => {
            JSON.stringify(values);

            sendEmail(values);

            toast({
              title: "Feedback sent",
              description: "Feedback successfully sent. Thank you!!",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          }}
        >
          {() => (
            <Form>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Tell us your feedback</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Field name="subject" validate={validateSubject}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.subject && form.touched.subject}
                      >
                        <FormLabel marginTop="2" htmlFor="subject">
                          Subject
                        </FormLabel>
                        <Input {...field} id="subject" placeholder="subject" />
                        <FormErrorMessage>
                          {form.errors.subject}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel marginTop="2" htmlFor="name">
                          Name
                        </FormLabel>
                        <Input {...field} id="name" placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email" validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel marginTop="2" htmlFor="email">
                          Email
                        </FormLabel>
                        <Input {...field} id="email" placeholder="email" />
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
                          Message
                        </FormLabel>
                        <Textarea
                          {...field}
                          id="message"
                          placeholder="message"
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
    </div>
  );
};

export default Feedback;
