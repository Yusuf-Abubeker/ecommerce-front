import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useCategories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery(
    ["categories"],
    async () => {
      const response = await apiClient.get("/category");
      return response.data.category;
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes in milliseconds
    }
  );

  return {
    categories: categories || [],
    error,
    isLoading,
  };
};

export default useCategories;
