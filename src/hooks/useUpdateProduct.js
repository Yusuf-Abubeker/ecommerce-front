import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useUpdateProduct = ({ productId }) => {
  const mutation = useMutation((updatedProduct) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("User not authenticated"); // You can handle this error as needed
    }

    return apiClient.put(`/products/${productId}`, updatedProduct, {
      headers: {
        "X-Auth-Token": accessToken,
      },
    });
  });

  return mutation;
};

export default useUpdateProduct;
