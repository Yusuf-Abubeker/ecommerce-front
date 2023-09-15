import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

const useAddCart = () => {
  const navigate = useNavigate();

  // Define a mutation for adding items to the cart
  const { mutate: addToCart, isLoading: isAddingToCart,error } = useMutation(
    (item) => {
      // You can customize the API endpoint and request here
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        navigate("/auth/login");
        return;
      }

      return apiClient.post("/carts", item, {
        headers: {
          "X-Auth-Token": accessToken,
        },
      });
    }
  );

  return {
    isAddingToCart, // Boolean indicating whether an add to cart request is in progress
    addToCart, // Function to add items to the cart
    error
  };
};

export default useAddCart;
