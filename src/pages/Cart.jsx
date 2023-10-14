import { ChakraProvider } from "@chakra-ui/react";
import CartsGrid from "../Cart/CartsGrid";
const CartOperation = () => {

  
  return (
    <ChakraProvider>
      <p>hello world</p>
      <CartsGrid />
    </ChakraProvider>
  );
};

export default CartOperation;
