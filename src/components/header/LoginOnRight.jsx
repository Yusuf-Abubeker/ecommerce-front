import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

const LoginOnRight = () => {
  return (
    <Box>
      <RouterLink to="/auth/login" style={{ textDecoration: "none" }}>
        <Button
          colorScheme="teal"
          size="sm" // Change the size to "md" for a smaller button
          borderRadius="md"
          _hover={{
            backgroundColor: "blue.600",
          }}
        >
          Login/Signup
        </Button>
      </RouterLink>
    </Box>
  );
};

export default LoginOnRight;
