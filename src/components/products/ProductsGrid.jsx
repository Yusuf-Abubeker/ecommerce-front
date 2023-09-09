import React, { useState } from "react";
import { SimpleGrid, Text, Button, Box } from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";
import ProductCards from "./ProductCards";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsGrid = ({ selectedCategory, selectedPlatform, searchText }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { error, products, isLoading, totalPages } = useProducts(
    selectedCategory,
    selectedPlatform,
    searchText,
    currentPage// Pass the current page to the hook
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const handlePageChange = (newPage) => {
    
    setCurrentPage(newPage);
  };

  return (
    <div>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={3}
          >
            {isLoading &&
              skeletons.map((skeleton) => (
                <ProductCardSkeleton key={skeleton} />
              ))}
            {products.map((product) => (
              <ProductCards key={product._id} product={product} />
            ))}
          </SimpleGrid>
          {totalPages > 1 && (
            <Box mt={4} textAlign="center">
              <Button
                size="sm"
                variant="outline"
                isDisabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </Button>
              <Button
                size="sm"
                variant="outline"
                isDisabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Button>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsGrid;
