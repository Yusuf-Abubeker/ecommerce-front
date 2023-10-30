import React from "react";
import { Box, List, ListItem, ListIcon, Link } from "@chakra-ui/react";

function Sidebar({ tasks }) {
  return (
    <Box
      width="250px" // Adjust the width of the sidebar as needed
      bg="gray.200" // Set the background color for the sidebar
      height="100vh" // Make the sidebar full height
      //position="fixed"
      top="0"
      left="0"
      padding="2rem"
    >
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            {task.icon}
            <Link textDecoration="none" color="black">
              {task.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
