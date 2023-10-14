import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useAddProduct = () => {
  const addProductMutation = useMutation(async (productData) => {
    const token = localStorage.getItem("accessToken")
    // Set the token in the request headers
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    const response = await apiClient.post("/products", productData,config);
    return response.data;
  });

  const { data: addedProduct, isLoading, error } = addProductMutation;

  const addProduct = async (productData) => {
    try {
      await addProductMutation.mutateAsync(productData);
    } catch (error) {
      return (
        error.response?.data || { message: error.response?.data } || {
          message: "Failed to add product",
        }
      );
    }
  };

  return {
    addedProduct,
    isLoading,
    error,
    addProduct,
  };
};

export default useAddProduct;
