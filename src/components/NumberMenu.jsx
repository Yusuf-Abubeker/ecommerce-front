import { Box, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import useNumberSelectionStore from "../hooks/useNumberSelectionStore";
const NumberMenu = () => {
  const selectedNumber = useNumberSelectionStore((s) => s.selectedNumber);
  const setSelectedNumber = useNumberSelectionStore((s) => s.setSelectedNumber);


  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} colorScheme="blue">
          {selectedNumber ? `Selected: ${selectedNumber}` : "Select a Number"}
        </MenuButton>
        <MenuList>
          {[...Array(20).keys()].map((number) => (
            <MenuItem key={number} onClick={() => handleNumberSelect(number + 1)}>
              {number + 1}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NumberMenu;
