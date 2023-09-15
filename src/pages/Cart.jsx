import { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import ProductList from "../components/products/ProductsGrid";
import CartCards from "../Cart/CartCards";
import CartsGrid from "../Cart/CartsGrid";
const CartOperation = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  return (
    <ChakraProvider>
      <CartsGrid />
    </ChakraProvider>
  );
};

export default CartOperation;
