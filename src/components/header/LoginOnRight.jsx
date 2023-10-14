import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const LoginOnRight = () => {
  // Check if the user is already logged in using local storage
  const isLoggedIn = localStorage.getItem("accessToken") !== null;

  return (
    <Box>
      
        <Link to="/auth/login">Login</Link>
      
    </Box>
  );
};

export default LoginOnRight;
