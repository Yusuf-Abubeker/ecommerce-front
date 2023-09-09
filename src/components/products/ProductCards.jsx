import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import img from "../../assets/noImage.png";
import StarRating from "./StarRating";

const ProductCards = ({ product }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={product.imageURL ? img : "no image"} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
        <StarRating rating={product.averageRating} />
        <Text>{product.price} birr</Text>
      </CardBody>
    </Card>
  );
};

export default ProductCards;
