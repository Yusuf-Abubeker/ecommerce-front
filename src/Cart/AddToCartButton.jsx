import { Button, useToast } from "@chakra-ui/react";
import useAddCart from "../hooks/useAddCart";
import { useState } from "react";

const AddToCartButton = ({ item }) => {
  const { addToCart, isAddingToCart } = useAddCart();
  const toast = useToast(); // Initialize Chakra UI's toast

  const handleAddToCart = async () => {
    try {
      await addToCart(item);
      showSuccessToast(); // Show the success toast
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Function to show the success toast
  const showSuccessToast = () => {
    toast({
      title: "Successfully Added to cart",
      status: "success",
      duration: 3000, // Duration in milliseconds
      isClosable: true,
    });
  };

  return (
    <div>
      <Button onClick={handleAddToCart} disabled={isAddingToCart}>
        {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
