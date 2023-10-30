import React from "react";
import {
  Heading,
  List,
  ListItem,
  Spinner,
  Box,
  Text,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import useCategories from "../../hooks/useCategories";
import useProductQueryStore from "../../store";

const CategoryList = () => {
  const { error, categories, isLoading } = useCategories();
  const selectedCategory = useProductQueryStore(
    (s) => s.productQuery.selectedCategory
  );
  const setSelectedCategory = useProductQueryStore((s) => s.setSelectedCategory);

  if (error) return <Text>Error occurred.</Text>;
  if (isLoading) return <Spinner size="lg" />;

  return (
    <Box>
      <Heading fontSize="2xl" marginBottom={4}>
        Categories
      </Heading>
      <List spacing={2}>
        {categories.map((category) => (
          <ListItem key={category._id}>
            <Tooltip label={`View ${category.name}`} placement="right">
              <Button
                leftIcon={<StarIcon />}
                variant="outline"
                borderColor="gray.300"
                _hover={{ bg: "gray.100", borderColor: "gray.400" }}
                onClick={() => setSelectedCategory(category)}
                w="100%"
                textAlign="left"
              >
                {category.name}
              </Button>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryList;
