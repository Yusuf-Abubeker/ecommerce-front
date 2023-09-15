import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCategories from "../../hooks/useCategories";
import useProductQueryStore from "../../store";

const PlatformSelector = () => {
  const { categories, error } = useCategories();
  const setSelectedPlatform = useProductQueryStore(
    (s) => s.setSelectedPlatform
  );
  const selectedPlatform = useProductQueryStore(
    (s) => s.productQuery.selectedPlatform
  );

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem
            key={category._id}
            onClick={() => setSelectedPlatform(category)}
          >
            {category.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
