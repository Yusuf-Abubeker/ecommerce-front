import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { Heading, Spinner, Text, Box, Image, Button,Flex } from "@chakra-ui/react";
import ExpandableText from "../components/products/ExpandableText";
import DefinitionItem from "../components/products/DefinitionItem";
import StarRating from "../components/products/StarRating";
import AddToCartButton from "../Cart/AddToCartButton";
import useNumberSelectionStore from "../hooks/useNumberSelectionStore";
import NumberMenu from "../components/NumberMenu";

const ProductDetailPage = () => {
  const { id } = useParams();
  const selectedNumber = useNumberSelectionStore((state) => state.selectedNumber);

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
      <Flex align="center">
      <Image src={product.data.imageURL[0]} maxH="400px" maxW="30%" margin="2" />

      <Flex direction="column" maxW="70%" margin="2">
        <Image src={product.data.imageURL[1]} maxH="200px" flex="1" margin="1" />
        <Image src={product.data.imageURL[2]} maxH="200px" flex="1" margin="1" />
      </Flex>
    </Flex>
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
      <NumberMenu/>
      <AddToCartButton item={{productId: product.data._id,quantity:selectedNumber}}/>

    </>
  );
};

export default ProductDetailPage;
