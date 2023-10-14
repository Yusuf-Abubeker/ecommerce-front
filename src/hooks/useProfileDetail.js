import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

const useProfileDetail = () => {
  const navigate = useNavigate();
  const {
    data: userProfile,
    error,
    isLoading,
  } = useQuery(["profile"], async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      //navigate("/auth/login");
      return;
    }
    const response = await apiClient.get("/login/me", {
      headers: {
        "X-Auth-Token": accessToken,
      },
    });

    return response.data;
  });

  return {
    userProfile,
    error,
    isLoading,
  };
};

export default useProfileDetail;
