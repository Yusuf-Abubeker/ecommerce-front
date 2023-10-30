import img from "../../assets/noImage.png";
import { Card, CardBody, Heading, Image, Text,Box } from "@chakra-ui/react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  return (
    <Card
      w="80%" // Adjust the width to your design
      p="4" // Add some padding for spacing
      borderWidth="1px" // Add a border
      borderRadius="md" // Apply a slight border radius
      overflow="hidden"
      _hover={{
        transform: "scale(1.02)", // Slight scaling on hover
        shadow: "md", // Add a shadow on hover
      }}
    >
      <Link to={'/products/' + product._id}>
        <Image
          src={product.imageURL ? img : "/noImage.png"}
          alt={product.name}
          objectFit="cover"
          h="170px" // Reduce the height for a smaller card
        />
        <CardBody mt="2">
          <Heading fontSize="lg" as="h2">
            {product.name}
          </Heading>
          <Text fontSize="md" fontWeight="semibold" mt="1">
            {product.price} birr
          </Text>
          <StarRating rating={product.averageRating} />
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProductCards;
