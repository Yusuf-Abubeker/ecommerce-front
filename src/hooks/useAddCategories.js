import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

const useAddCategories = () => {
    const navigate = useNavigate()
  const addCategoryMutation = useMutation(async (categoryData) => {
    const token = localStorage.getItem("accessToken")
    // Set the token in the request headers
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    const response = await apiClient.post("/category", categoryData,config);
    return response.data;
  });

  const { data: addedCategory, isLoading, error } = addCategoryMutation;

  const addCategory = async (categoryData) => {
    try {
      await addCategoryMutation.mutateAsync(categoryData);
      navigate('/newProduct')
    } catch (error) {
      return (
        error.response?.data || { message: error.response?.data } || {
          message: "Failed to add category",
        }
      );
    }
  };

  return {
    addedCategory: addedCategory,
    isLoading,
    error,
    addCategory: addCategory,
  };
};

export default useAddCategories;
