import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/header/NavBar";
import ProductsGrid from "./components/products/ProductsGrid";
import CategoryList from "./components/categories/CategoryList";
import { useState } from "react";
import PlatformSelector from "./components/categories/PlatformSelector";
import ProductHeading from "./components/products/ProductHeading";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [searchText, setSearchText] = useState(null);


  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        md: `"header header" "nav main" "nav footer"`,
        lg: `"header header" "nav main" "nav footer"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area={"header"}>
        <NavBar onSearch={(searchText)=>setSearchText(searchText)} />
      </GridItem>
      <Show></Show>
      <GridItem pl="2" area={"nav"} display={{ base: "none", md: "block" }}>
        <CategoryList selectedCategory={selectedCategory} onSelectCategory={(category)=>setSelectedCategory(category)}/>
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <Box paddingLeft={1}>
        <ProductHeading headingQuery={selectedCategory || selectedPlatform}/>
        <PlatformSelector onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <ProductsGrid searchText={searchText} selectedCategory={selectedCategory} selectedPlatform={selectedPlatform}/>
        </Box>
        
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
