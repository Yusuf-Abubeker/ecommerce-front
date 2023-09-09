import { Heading } from "@chakra-ui/react";
import React from "react";

const ProductHeading = ({ headingQuery }) => {
  const heading = `${headingQuery?.name || ''} Products`;
  return <Heading as={"h1"}>{heading}</Heading>;
};

export default ProductHeading;
