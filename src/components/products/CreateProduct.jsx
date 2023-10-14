import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Image,
} from '@chakra-ui/react';
import useAddProduct from '../../hooks/useAddProduct';
import useCategories from '../../hooks/useCategories';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
    categoryId: '', // Use categoryId to store the selected category
    imageURL: [],
  });

  const { addProduct, isLoading, error, addedProduct } = useAddProduct();
  const { categories } = useCategories();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = [];

    for (let i = 0; i < files.length; i++) {
      const imageUrl = URL.createObjectURL(files[i]);
      imageUrls.push(imageUrl);
    }

    setProduct({ ...product, imageURL: imageUrls });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Quantity in Stock</FormLabel>
          <Input
            type="number"
            name="stockQuantity"
            value={product.stockQuantity}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <VStack spacing={2}>
          <FormLabel>Upload Images (up to 3)</FormLabel>
          <Input
            type="file"
            name="imageURL"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </VStack>
        {/* Show selected images */}
        {product.imageURL.length > 0 && (
          <VStack spacing={2}>
            <FormLabel>Selected Images</FormLabel>
            {product.imageURL.map((imageUrl, index) => (
              <Image key={index} src={imageUrl} maxH="200px" />
            ))}
          </VStack>
        )}
        <Button type="submit" colorScheme="teal" mt={4}>
          Create Product
        </Button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.response.data.error}</div>}
      {addedProduct && <div>Product added with ID: {addedProduct._id}</div>}
    </Box>
  );
};

export default CreateProduct;
