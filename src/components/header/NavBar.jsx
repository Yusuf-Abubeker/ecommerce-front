import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import CartOnRight from "./CartOnRight";
import LoginOnRight from "./LoginOnRight";
import ProfileDetail from "./ProfileDetail";
const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
      </Link>
      <SearchInput />
      <CartOnRight />
      <LoginOnRight/>
      <ProfileDetail/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
