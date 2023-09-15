import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useSignUp = () => {
  // Define a sign-up mutation using useMutation
  const signUpMutation = useMutation(
    async({ role, name, address, contact, email, password, profilePicture }) =>{
      const response = await apiClient.post("/users", {
        role,
        name,
        address,
        contact,
        email,
        password,
        profilePicture,
      })
      const accessToken = response.data.token;

      localStorage.removeItem("accessToken");
  
      localStorage.setItem("accessToken", accessToken);
  
    });

  // Extract relevant data from the mutation result
  const { data: signUpData, isLoading, error } = signUpMutation;

  // Define a signUp function that triggers the mutation
  const signUp = async (
    role,
    name,
    address,
    contact,
    email,
    password,
    profilePicture
  ) => {
    try {
      // Trigger the sign-up mutation with the provided data
      await signUpMutation.mutateAsync({
        role,
        name,
        address,
        contact,
        email,
        password,
        profilePicture,
      });
    } catch (error) {
      return (
        error.response?.data || { message: error.response?.data } || {
          message: "Sign Up Failed",
        }
      );
    }
  };

  return {
    signUpData,
    isLoading,
    error,
    signUp, // Provide the signUp function
  };
};

export default useSignUp;
