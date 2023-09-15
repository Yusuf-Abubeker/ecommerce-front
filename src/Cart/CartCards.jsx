import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import img from "../assets/noImage.png";
import { Link } from "react-router-dom";

const CartCards = ({ productOnCart }) => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
      }}
    >
      <Image
        src={productOnCart.product.imageURL ? img : "no image"}
        boxSize={200}
      />
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={"/products" + productOnCart.product._id}>
            {productOnCart.product.name}
          </Link>
        </Heading>
        <Text>{productOnCart.product.price} birr</Text>
        <Text>Quantity: {productOnCart.quantity} pieces</Text>
        <Text>{productOnCart.product.description}</Text>
      </CardBody>
    </Card>
  );
};

export default CartCards;
