import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaBox,
  FaShoppingCart,
  FaWarehouse,
  FaDollarSign,
  FaFolder,
  FaUsers,
} from "react-icons/fa"; 
import OperationCard from "./OperationCard";
function MerchantDashboard() {
  const operations = [
    {
      title: "Product Management",
      description: "Add, edit, and manage your product listings, including product details, images, and inventory levels.",
      icon: <FaBox />,
    },
    {
      title: "Order Processing",
      description: "View and process incoming customer orders, update order statuses, and generate invoices and packing slips.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Inventory Management",
      description: "Monitor and manage product stock levels, set low-stock alerts, and handle product variants.",
      icon: <FaWarehouse />,
    },
    {
      title: "Pricing and Discounts",
      description: "Set and adjust product prices, create discounts, and manage pricing strategies to attract customers.",
      icon: <FaDollarSign />,
    },
    {
      title: "Product Categories",
      description: "Organize your products into categories and subcategories, making it easier for customers to browse and find items.",
      icon: <FaFolder />,
    },
    {
      title: "Customer Interaction",
      description: "Engage with customers to address inquiries, issues, returns, and feedback, providing excellent service.",
      icon: <FaUsers />,
    },
  ];
  
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <Container maxW="xl" mt={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Welcome, Merchant!
      </Heading>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        {operations.map((operation, index) => (
          <GridItem key={index}>
            <OperationCard operation={operation} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default MerchantDashboard;
