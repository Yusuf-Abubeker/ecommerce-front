// src/components/Dashboard.js

import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useMerchantsProduct from "../../hooks/useMerchantsProduct";
import EditProduct from "../../components/products/ProductEdit";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import ProductCard from "./ProductCard";

const ProductManagement = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const { error, products, isLoading, totalPages } =
    useMerchantsProduct(currentPage);
  const deleteProduct = useDeleteProduct();
  const toast = useToast();

  const handleAddProduct = () => {
    navigate("/createPro");
  };

  const handleEditProduct = (productId) => {
    setIsEditing(true);
    setEditProductId(productId);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditProductId(null);
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await deleteProduct.mutateAsync(productId);
      toast({
        title: "Product Deleted",
        description: "The product has been successfully deleted.",
        status: "success",
        duration: 5000, // Display time in milliseconds
        isClosable: true,
      });
      // Refresh the ProductManagement page
      navigate("/operations/Product Management");
    } catch (error) {
      toast({
        title: "Error Deleting Product",
        description: "An error occurred while deleting the product.",
        status: "error",
        duration: 5000, // Display time in milliseconds
        isClosable: true,
      });
    }
  };

  const handleToggleStock = (index) => {
    // Handle toggling the stock status
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) return <Spinner />;

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Product Management Dashboard
      </Heading>
      <Button colorScheme="teal" onClick={handleAddProduct}>
        Add New Product
      </Button>
      <SimpleGrid columns={2} spacing={4}>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={() => handleEditProduct(product._id)}
            onRemove={() => handleRemoveProduct(product._id)}
            onToggleStock={() => handleToggleStock(product._id)}
          />
        ))}
      </SimpleGrid>

      {isEditing && (
        <EditProduct
          isOpen={isEditing}
          onClose={handleCancelEdit}
          productId={editProductId}
        />
      )}

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
    </Box>
  );
};

export default ProductManagement;
