import useCategories from "../../hooks/useCategories";
import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  const { error, categories, isLoading } = useCategories();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={2}>Categories</Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category._id}>
            <Button
              whiteSpace="normal"
              fontWeight={
                category._id === selectedCategory?._id ? "bold" : "normal"
              }
              variant="link"
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoryList;
