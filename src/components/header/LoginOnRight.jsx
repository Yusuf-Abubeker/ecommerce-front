import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const LoginOnRight = () => {
  return (
    <Box>
      <Link to="/auth/login">Login</Link>
    </Box>
  );
};

export default LoginOnRight;
