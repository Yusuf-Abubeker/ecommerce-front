// UserManagementDashboard.js
import React from "react";
import { Container, Heading, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import {
  FaUserPlus,
  FaUserEdit,
  FaUserSlash,
  FaKey,
  FaUserCog,
} from "react-icons/fa";
import Sidebar from "./SideBar";

function UserManagementDashboard() {
  const userManagementTasks = [
    {
      title: "Create User",
      description: "Add new users to the system and assign roles and permissions.",
      icon: <FaUserPlus />,
    },
    {
      title: "Edit User",
      description: "Modify user information, such as name, email, and role.",
      icon: <FaUserEdit />,
    },
    {
      title: "Deactivate User",
      description: "Suspend or deactivate user accounts when necessary.",
      icon: <FaUserSlash />,
    },
    {
      title: "Reset Password",
      description: "Initiate password resets for user accounts.",
      icon: <FaKey />,
    },
    {
      title: "Role Assignment",
      description: "Assign or update roles and permissions for users based on their responsibilities.",
      icon: <FaUserCog />,
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        User Management Dashboard
      </Heading>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        <GridItem>
          <Sidebar tasks={userManagementTasks} />
        </GridItem>
        <GridItem>
          {/* Content for the User Management Dashboard */}
          here is the content
        </GridItem>
      </Grid>
    </>
  );
}

export default UserManagementDashboard;
