import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import useProductQueryStore from "../store"; // Import your store path here

const fetchProducts = async (page, productQuery) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    console.log("no valid access token in ump");
    return;
  }
  const params = new URLSearchParams();
  params.append("page", page);

  let endpoint = "products/myProduct";

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

  const response = await apiClient.get(endpoint, {
    headers: {
      "X-Auth-Token": accessToken,
    },
  });
  return response.data;
};

const useMerchantsProduct = (page) => {
  const productQuery = useProductQueryStore((s) => s.productQuery);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(
    ["myproducts", productQuery, page],
    () => fetchProducts(page, productQuery),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      refetchOnMount: "always",
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

export default useMerchantsProduct;
