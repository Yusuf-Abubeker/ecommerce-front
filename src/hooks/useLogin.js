import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"

const useLogin = () => {
  const navigate = useNavigate();
  // Define a login mutation using useMutation
  const loginMutation = useMutation(async ({ email, password }) => {
    // Make the login request
    const response = await apiClient.post("/login", {
      email,
      password,
    });
    const accessToken = response.data.token;
    const decodedToken = jwt_decode(accessToken);
    const userRole = decodedToken.role;

    localStorage.removeItem("accessToken");

    localStorage.setItem("accessToken", accessToken);

    if (userRole === "merchant") {
      navigate("/merchant");
    } else {
      navigate("/")
    }
    // Return the response data
    return response.data;
  });

  // Extract relevant data from the mutation result
  const { data: loginData, isLoading, error } = loginMutation;

  // Define a login function that triggers the mutation
  const login = async (email, password) => {
    try {
      // Trigger the login mutation with email and password
      await loginMutation.mutateAsync({ email, password });
    } catch (error) {
      return (
        error.response?.data || { message: error.response?.data } || {
          message: "Login Failed",
        }
      );
    }
  };

  return {
    loginData,
    isLoading,
    error,
    login, // Provide the login function
  };
};

export default useLogin;
