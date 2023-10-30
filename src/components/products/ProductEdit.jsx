import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import useUpdateProduct from "../../hooks/useUpdateProduct";
import useCategories from "../../hooks/useCategories";

const EditProduct = ({ isOpen, onClose, productId }) => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0,
    categoryId: "",
  });

  const { data: product, isLoading, error } = useProduct(productId);
  const updateProduct = useUpdateProduct({ productId });
  const toast = useToast();
  const { categories } = useCategories();

  // Use useEffect to update productData when product data is available
  useEffect(() => {
    if (!isLoading && !error && product) {
      setProductData({
        name: product.data.name,
        description: product.data.description,
        price: product.data.price,
        stockQuantity: product.data.stockQuantity,
        categoryId: product.data.category._id,
      });
    }
  }, [isLoading, error, product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProduct.mutate(productData, {
      onSuccess: () => {
        toast({
          title: "Product Updated",
          description: "Product updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        onClose();
        navigate("/operations/Product Management");
      },
      onError: (error) => {
        toast({
          title: "Update Failed",
          description: "Failed to update the product",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Stock Quantity</FormLabel>
              <Input
                type="number"
                name="stockQuantity"
                value={productData.stockQuantity}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                name="categoryId"
                value={productData.categoryId}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Update Product
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProduct;
