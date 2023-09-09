import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
const fetchProducts = async (
  selectedCategory,
  selectedPlatform,
  searchText,
  page
) => {
  const params = new URLSearchParams();

  params.append("page", page);

  let endpoint = "/products";

  // Construct the endpoint based on selectedCategory or selectedPlatform
  if (selectedCategory) {
    endpoint += `/category/${selectedCategory._id}`;
  } else if (selectedPlatform) {
    endpoint += `/category/${selectedPlatform._id}`;
  } else if (searchText) {
    endpoint += `/search?search=${searchText}&page=${page}`;
  }
  if (!searchText) {
    endpoint += `?${params.toString()}`;
  }

  const response = await apiClient.get(endpoint);
  return response.data;
};

const useProducts = (selectedCategory, selectedPlatform, searchText, page) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(
    ["products", selectedCategory, selectedPlatform, searchText, page],
    () => fetchProducts(selectedCategory, selectedPlatform, searchText, page),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
    }
  );

  return {
    products: products?.products || [],
    totalCount: products?.totalCount || 0,
    currentPage: page,
    totalPages: products?.totalPages || 1,
    error,
    isLoading,
  };
};

export default useProducts;
