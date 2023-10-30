import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import OperationCard from "./OperationCard";

function AnalyticsReportingDashboard() {
  const analyticsReportingTasks = [
    {
      title: "Access Sales Data",
      description:
        "View and analyze sales data, including revenue and order history.",
    },
    {
      title: "Customer Behavior",
      description:
        "Analyze customer behavior, such as browsing patterns, cart abandonment, and conversion rates.",
    },
    {
      title: "Inventory Status",
      description:
        "Monitor and report on product inventory levels, low-stock items, and restocking needs.",
    },
    {
      title: "Generate Reports",
      description:
        "Create various reports to gain insights into sales performance and customer trends.",
    },
    {
      title: "Performance Metrics",
      description:
        "Track key performance metrics, such as website traffic, conversion rates, and user engagement.",
    },
    {
      title: "Customized Reports",
      description:
        "Generate customized reports based on specific business needs and key performance indicators (KPIs).",
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <Container maxW="xl" mt={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Analytics and Reporting Dashboard
      </Heading>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        {analyticsReportingTasks.map((task, index) => (
          <GridItem key={index}>
            <OperationCard operation={task} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default AnalyticsReportingDashboard;
