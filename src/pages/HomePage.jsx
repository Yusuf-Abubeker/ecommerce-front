import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProductsGrid from "../components/products/ProductsGrid";
import CategoryList from "../components/categories/CategoryList";
import PlatformSelector from "../components/categories/PlatformSelector";
import ProductHeading from "../components/products/ProductHeading";
const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" "footer"`,
        md: `"nav main" "nav footer"`,
        lg: `"nav main" "nav footer"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"} display={{ base: "none", md: "block" }} bgColor="ButtonShadow">
        <CategoryList />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <Box paddingLeft={1}>
          <ProductHeading />
          <PlatformSelector />
          <ProductsGrid />
        </Box>
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Copy Right @ 2023
      </GridItem>
    </Grid>
  );
};

export default HomePage;
