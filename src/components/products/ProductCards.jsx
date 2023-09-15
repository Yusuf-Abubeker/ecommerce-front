import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import img from "../../assets/noImage.png";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  return (
    <Card borderRadius={10} overflow="hidden" _hover={{
      transform: 'scale(1.03)',
      transition: 'transform .15s ease-in'
    }}>
      <Image src={product.imageURL ? img : "no image"} />
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={'/products/'+product._id}>{product.name}</Link>
        </Heading>
        <StarRating rating={product.averageRating} />
        <Text>{product.price} birr</Text>
      </CardBody>
    </Card>
  );
};

export default ProductCards;
