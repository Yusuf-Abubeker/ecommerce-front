import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const logout = async () => {
  // Simulate a logout action by removing the accessToken from local storage
  localStorage.removeItem("accessToken");
};

const Logout = () => {
  const navigate = useNavigate();

  const { status } = useQuery(["logout"], logout, {
    // Disable caching for the logout query
    cacheTime: 0,
    onSuccess: () => {
      navigate("/");
    },
  });

  if (status === "loading") {
    // You can render a loading indicator here if needed
    return <Spinner/>;
  }

  return null; // You can render something if needed
};

export default Logout;
