import { Link } from "react-router-dom";
import { Box, Avatar } from "@chakra-ui/react";
import img from "../../assets/comp2.jpg";

const ProfileDetail = () => {
  return (
    <Box>
      <Link to="/me">
        <Avatar size="xl" name={"me"} src={img} boxSize={'46px'}/>
      </Link>
    </Box>
  );
};

export default ProfileDetail;
