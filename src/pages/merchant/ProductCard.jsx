import React from "react";
import { Box, Text, IconButton, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import StarRating from "../../components/products/StarRating";

const ProductCard = ({ product, onEdit, onRemove, onToggleStock }) => (
  <Box
    key={product._id}
    borderWidth="1px"
    borderRadius="lg"
    p={4}
    position="relative"
  >
    <IconButton icon={<EditIcon />} position="absolute" top="0" right="0" onClick={onEdit} />
    <IconButton icon={<DeleteIcon />} position="absolute" top="0" right="10" onClick={onRemove} />
    <Text fontSize="lg">{product.name}</Text>
    <Text>{product.description}</Text>
    <Text fontWeight="bold">Price: {product.price} birr</Text>
    <StarRating rating={product.averageRating} />
    <Button colorScheme={product.inStock ? "green" : "red"} onClick={onToggleStock}>
      {product.inStock ? "In Stock" : "Out of Stock"}
    </Button>
  </Box>
);

export default ProductCard;
