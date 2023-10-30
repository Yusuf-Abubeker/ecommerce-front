import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import {
  Heading,
  Spinner,
  Text,
  Box,
  Image,
  Button,
  Flex,
  VStack,
  HStack

} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa"; // Example: Use an icon library for visual enhancement
import ExpandableText from "../components/products/ExpandableText";
import DefinitionItem from "../components/products/DefinitionItem";
import StarRating from "../components/products/StarRating";
import AddToCartButton from "../Cart/AddToCartButton";
import useNumberSelectionStore from "../hooks/useNumberSelectionStore";
import NumberMenu from "../components/NumberMenu";

const ProductDetailPage = () => {
  const { id } = useParams();
  const selectedNumber = useNumberSelectionStore(
    (state) => state.selectedNumber
  );

  if (id === undefined) {
    return (
      <Box>
        <Heading>Error</Heading>
        <Text>Product ID is undefined.</Text>
      </Box>
    );
  }

  const { data: product, isLoading, error } = useProduct(id);

  if (isLoading) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Box>
        <Heading>Error</Heading>
        <Text>An error occurred while fetching the product data.</Text>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Flex direction={{ base: "column", md: "row" }} align="center">
        <Image
          src={product.data.imageURL[0]}
          maxH="400px"
          maxW="30%"
          marginY={2}
        />

        <VStack align="start" maxW={{ base: "100%", md: "70%" }} marginY={2}>
          <Heading>{product.data.name}</Heading>
          <StarRating rating={product.data.averageRating} />

          <ExpandableText>{product.data.description}</ExpandableText>

          <DefinitionItem term="Category">
            <Text key={product.data.category._id}>
              {product.data.category.name}
            </Text>
          </DefinitionItem>

          <DefinitionItem term="Author of the Product">
            <Text>Name: {product.data.merchantName}</Text>
            <Text>Address: {product.data.merchantAddress}</Text>
            <Text>Contact: {product.data.merchantContact}</Text>
          </DefinitionItem>

          <HStack spacing={4}>
            <NumberMenu />
            <AddToCartButton
              item={{ productId: product.data._id, quantity: selectedNumber }}
            />
          </HStack>
        </VStack>
      </Flex>

      {/* Additional Features */}
      <Button
        leftIcon={<FaArrowLeft />} // Example: Use a back arrow icon
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          // Implement a back button functionality to return to the previous page
        }}
      >
        Back to Products
      </Button>
    </Box>
  );
};

export default ProductDetailPage;
