import { Heading } from "@chakra-ui/react";
import useProductQueryStore from "../../store";

const ProductHeading = () => {
  const category = useProductQueryStore((s) => s.productQuery.category);
  const platform = useProductQueryStore((s) => s.productQuery.category);

  const heading = `${category?.name || ""}${platform?.name || ""} Products`;
  return <Heading as={"h1"}>{heading}</Heading>;
};

export default ProductHeading;
