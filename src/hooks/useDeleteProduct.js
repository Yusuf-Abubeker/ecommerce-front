import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useDeleteProduct = () => {
  const mutation = useMutation(async (productId) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("User not authenticated"); // You can handle this error as needed
    }

    await apiClient.delete(`/products/${productId}`, {
      headers: {
        "X-Auth-Token": accessToken,
      },
    });
  });

  return mutation;
};

export default useDeleteProduct;
