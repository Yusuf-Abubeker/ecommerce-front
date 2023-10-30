import {
    Box,
    Container,
    Heading,
    Grid,
    GridItem,
    useBreakpointValue,
    Icon,
  } from "@chakra-ui/react";
  import OperationCard from "./OperationCard";
  import {
    FaUser,
    FaShieldAlt,
    FaFileAlt,
    FaChartLine,
    FaBullhorn,
    FaCreditCard,
    FaCogs,
    FaGlobe,
    FaDatabase,
    FaPlug,
    FaSync,
  } from "react-icons/fa";
  
  function AdminDashboard() {
    const adminTasks = [
      {
        icon: <FaUser />,
        title: "User Management",
        description: "Create, modify, or deactivate user accounts. Reset user passwords and manage user access.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Security and Compliance",
        description: "Implement security measures to protect customer data and payment information. Ensure compliance with data protection regulations and PCI DSS standards.",
      },
      {
        icon: <FaFileAlt />,
        title: "Content Management",
        description: "Update website content, including text, images, and videos. Manage product descriptions and landing pages.",
      },
      {
        icon: <FaChartLine />,
        title: "Analytics and Reporting",
        description: "Access sales data, order history, and other performance metrics. Generate reports on sales, customer behavior, and inventory status.",
      },
      {
        icon: <FaBullhorn />,
        title: "Marketing and Promotion",
        description: "Create and manage marketing campaigns. Offer discounts, coupons, and gift cards. Integrate with email marketing platforms.",
      },
      {
        icon: <FaCreditCard />,
        title: "Payment and Shipping",
        description: "Configure payment gateways and shipping methods. Set tax rates and apply discounts or promotions. Handle payment issues and chargebacks.",
      },
      {
        icon: <FaCogs />,
        title: "Site Configuration",
        description: "Customize the website's design, layout, and branding. Adjust site settings, such as SEO configurations and URLs. Handle domain and hosting settings.",
      },
      {
        icon: <FaGlobe />,
        title: "Multi-language and Multi-currency Support",
        description: "Manage internationalization features, such as multiple languages and currencies.",
      },
      {
        icon: <FaDatabase />,
        title: "Data Backup and Recovery",
        description: "Regularly backup data and ensure disaster recovery procedures are in place.",
      },
      {
        icon: <FaPlug />,
        title: "Third-Party Integrations",
        description: "Integrate with external tools and services, such as CRM, inventory management, or analytics software.",
      },
      {
        icon: <FaSync />,
        title: "Site Maintenance and Updates",
        description: "Keep the e-commerce platform and its components up to date with the latest software updates and security patches.",
      },
    ];
    
  
    const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  
    return (
      <Container maxW="xl" mt={10}>
        <Heading as="h1" size="2xl" mb={6} textAlign="center">
          Welcome, Admin!
          
        </Heading>
        <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
          {adminTasks.map((task, index) => (
            <GridItem key={index}>
              <OperationCard operation={task} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default AdminDashboard;
  