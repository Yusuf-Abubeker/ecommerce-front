import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import useProductQueryStore from "../store"; // Import your store path here

const fetchProducts = async (page, productQuery) => {
  const params = new URLSearchParams();
  params.append("page", page);

  let endpoint = "/products";

  // Construct the endpoint based on productQuery
  if (productQuery.selectedCategory) {
    endpoint += `/category/${productQuery.selectedCategory._id}`;
  } else if (productQuery.selectedPlatform) {
    endpoint += `/category/${productQuery.selectedPlatform._id}`;
  } else if (productQuery.searchText) {
    endpoint += `/search?search=${productQuery.searchText}&page=${page}`;
  }
  if (!productQuery.searchText) {
    endpoint += `?${params.toString()}`;
  }

  const response = await apiClient.get(endpoint);
  return response.data;
};

const useProducts = (page) => {
  const productQuery = useProductQueryStore((s) => s.productQuery);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products", productQuery, page], () => fetchProducts(page, productQuery), {
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

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
