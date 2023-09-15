import { Link } from "react-router-dom";
import { Box, Icon } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi"; // Import the shopping cart icon

const CartOnRight = () => {
  return (
    <Box>
      <Link to="/cart">
        <Icon as={FiShoppingCart} boxSize={6} mr={2} />
        Cart
      </Link>
    </Box>
  );
};

export default CartOnRight;
