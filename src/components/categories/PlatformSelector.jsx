import {
  Button,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCategories from "../../hooks/useCategories";

const PlatformSelector = ({onSelectPlatform}) => {
  const { categories, error } = useCategories();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        platforms
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem key={category._id} onClick={() => onSelectPlatform(category)}>{category.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
