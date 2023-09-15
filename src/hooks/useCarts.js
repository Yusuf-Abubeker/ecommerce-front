import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

const useCarts = () => {
  const navigate = useNavigate();
  const {
    data: cartItems,
    error,
    isLoading,
  } = useQuery(["carts"], async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/auth/login");
      return;
    }
    const response = await apiClient.get("/carts", {
      headers: {
        "X-Auth-Token": accessToken,
      },
    });

    return response.data;
  });

  return {
    cartItems: cartItems || [],
    error,
    isLoading,
  };
};

export default useCarts;
