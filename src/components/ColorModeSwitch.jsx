import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [toggleText, setToggleText] = useState("Light Mode");

  useEffect(() => {
    // Update the toggle text based on the current color mode
    if (colorMode === "dark") {
      setToggleText("Dark Mode");
    } else {
      setToggleText("Light Mode");
    }
  }, [colorMode]);

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme={colorMode === "dark" ? "gray" : "teal"}
      />
      <Text whiteSpace="nowrap">{toggleText}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
