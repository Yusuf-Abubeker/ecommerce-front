import { Box, Heading, FormControl, Input, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react"; // Import useRef
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin"; // Import the useLogin hook

const MotionBox = motion(Box);

const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Use the useLogin hook to handle login
  const { isLoading, error, login } = useLogin();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await login(email, password);

      navigate("/");
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
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <Input type="email" placeholder="Email" ref={emailRef} required />
        </FormControl>
        <FormControl id="password" mb={6}>
          <Input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          width="100%"
          mt={4}
          isLoading={isLoading}
          whilehover={{ scale: 1.1 }}
          whiletap={{ scale: 0.9 }}
        >
          Log In
        </Button>
      </form>
      {error && <p>Error: {error.message}</p>}
      <Box mt={4}>
        <Link to="/auth/signUp">Don't have an account? Sign Up</Link>
      </Box>
    </MotionBox>
  );
};

export default LoginPage;
