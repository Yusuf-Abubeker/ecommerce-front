import { SimpleGrid, Text } from "@chakra-ui/react";
import useCarts from "../hooks/useCarts";
import CartCards from "./CartCards";
import ProductCardSkeleton from "../components/products/ProductCardSkeleton";

const CartsGrid = () => {
  const { error, cartItems, isLoading } = useCarts();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
        {error && <Text>{error.response.data.message}</Text>}
        {cartItems.map((items) => (
          <CartCards key={items._id} productOnCart={items} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CartsGrid;
