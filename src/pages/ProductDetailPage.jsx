import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { Heading, Spinner, Text, Box, Image, Button } from "@chakra-ui/react";
import ExpandableText from "../components/products/ExpandableText";
import DefinitionItem from "../components/products/DefinitionItem";
import StarRating from "../components/products/StarRating";
import img from "../assets/comp.jpg";

const ProductDetailPage = () => {
  const { id } = useParams();

  if (id === undefined) {
    return (
      <Box>
        <Heading>Error</Heading>
        <Text>Product ID is undefined.</Text>
      </Box>
    );
  }

  const { data: product, isLoading, error } = useProduct(id);
  console.log(product);

  if (isLoading) {
    return <Spinner />;
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
    <>
      <Heading>{product.data.name}</Heading>
      <ExpandableText>{product.data.description}</ExpandableText>
      <DefinitionItem term={"Category"}>
        <Text key={product.data.category._id}>
          {product.data.category.name}
        </Text>
      </DefinitionItem>
      <DefinitionItem term={"Rating"}>
        <StarRating rating={product.data.averageRating} />
      </DefinitionItem>
      <DefinitionItem term={"Author of the Product"}>
        <Text>Name : {product.data.merchantName}</Text>
        <Text>Address : {product.data.merchantAddress}</Text>
        <Text>Contact : {product.data.merchantContact}</Text>
      </DefinitionItem>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>

    </>
  );
};

export default ProductDetailPage;
