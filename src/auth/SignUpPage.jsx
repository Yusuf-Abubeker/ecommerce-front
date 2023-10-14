import { useRef } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import useSignUp from "../hooks/useSignUp";

const MotionBox = motion(Box);

const SignUpPage = () => {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const profilePictureRef = useRef(null);

  const { signUpData, isLoading, error, signUp } = useSignUp();
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const contact = contactRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const profilePicture = profilePictureRef.current.files[0];
    const role = "merchant";

    try {
      await signUp(role, name, address, contact, email, password, profilePicture);

      //navigate("/");
    } catch (error) {
      // Handle login errors here
      console.log(error)
    }
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      p={8}
      maxWidth="400px"
      mx="auto"
      mt={16}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={4}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" ref={nameRef} required />
        </FormControl>
        <FormControl id="address" mb={4}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Your address"
            ref={addressRef}
            required
          />
        </FormControl>
        <FormControl id="contact" mb={4}>
          <FormLabel>Contact</FormLabel>
          <Input
            type="text"
            placeholder="Your contact number"
            ref={contactRef}
            required
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" ref={emailRef} required />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </FormControl>
        <FormControl id="profilePicture" mb={6}>
          <FormLabel>Profile Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            ref={profilePictureRef}
            
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          width="100%"
          mt={4}
          isLoading={isLoading}
          loadingText="signingUp"
          spinnerPlacement="start"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Sign Up
        </Button>
      </form>
      {error && <p>Error: {error.response.data.message}</p>}
    </MotionBox>
  );
};

export default SignUpPage;
