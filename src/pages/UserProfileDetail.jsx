import {
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useProfileDetail from "../hooks/useProfileDetail";

const UserProfileDetail = () => {
  const { userProfile, isLoading, error } = useProfileDetail();
  console.log(userProfile);
  if (isLoading) return <Spinner />;
  if (error) return <Text>something went wrong</Text>;

  return (
    <Box p={4}>
      <Heading size="lg">User Profile</Heading>
      <Flex align="center" mt={4}>
        <Avatar
          size="xl"
          name={userProfile.profile.name}
          src={userProfile.profile.profilePicture}
        />
        <Box ml={4}>
          <Text fontSize="xl">{userProfile.profile.name}</Text>
          <Text fontSize="md">{userProfile.profile.contact}</Text>
          <Text fontSize="sm">{userProfile.profile.address}</Text>
          <Text fontSize="sm">{userProfile.email}</Text>
          <Text fontSize="sm">{userProfile.email}</Text>
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
