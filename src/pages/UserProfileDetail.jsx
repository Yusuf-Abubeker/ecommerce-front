import React from "react";
import {
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  Button,
 
} from "@chakra-ui/react";

const UserProfileDetail = () => {
  // Replace with actual user data or fetch it from an API
  const userData = {
    name: "John Doe",
    username: "johndoe123",
    email: "johndoe@example.com",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  return (
    <Box p={4}>
      <Heading size="lg">User Profile</Heading>
      <Flex align="center" mt={4}>
        <Avatar size="xl" name={userData.name} src={userData.avatarUrl} />
        <Box ml={4}>
          <Text fontSize="xl">{userData.name}</Text>
          <Text fontSize="md">@{userData.username}</Text>
          <Text fontSize="sm">{userData.email}</Text>
        </Box>
      </Flex>
      <Button
        colorScheme="blue"
        mt={4}
        onClick={() => {
          // Handle edit profile button click
          // You can navigate to an edit profile page or show an edit profile modal
        }}
      >
        Edit Profile
      </Button>
    </Box>
  );
};

export default UserProfileDetail;
