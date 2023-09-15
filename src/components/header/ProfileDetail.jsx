import { Link } from "react-router-dom";
import { Box, Avatar, Text, Spinner } from "@chakra-ui/react";
import useProfileDetail from "../../hooks/useProfileDetail";
const ProfileDetail = () => {
  const { userProfile, isLoading, error } = useProfileDetail();
  if (error) return <Text>{error.message}</Text>;
  if(isLoading) return <Spinner/>

  return (
    <Box>
      <Link to="/me">
        <Avatar
          size="xl"
          name={userProfile.profile.name}
          src={userProfile.profile.profilePicture}
          boxSize={"46px"}
        />
      </Link>
    </Box>
  );
};

export default ProfileDetail;
