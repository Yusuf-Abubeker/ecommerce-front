import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import useAddCategories from '../../hooks/useAddCategories';

const CreateNewCategory = () => {
  const [category, setCategory] = useState({
    name: '',
  });

  const {  addCategory, isLoading, error, addedCategory } = useAddCategories();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(category);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Category Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
          />
        </FormControl>
 
        <Button type="submit" colorScheme="teal" mt={4}>
          Create Category
        </Button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.response.data.error}</div>}
      {addedCategory && <div>Product added with ID: {addedCategory._id}</div>}
    </Box>
  );
};

export default CreateNewCategory;
