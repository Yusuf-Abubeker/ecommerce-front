import React from "react";
import { Box, Heading, Link, Popover, PopoverTrigger, PopoverContent, PopoverBody } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

function OperationCard({ operation }) {
  const linkVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div whileHover="hover">
      <Link as={RouterLink} to={`/adminOperations/${operation.title}`} textDecoration="none">
        <Popover trigger="hover" placement="top">
          <PopoverTrigger>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              shadow="md"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.02)", shadow: "lg" }}
            >
              <span
                style={{ fontSize: "2rem" }}
                role="img"
                aria-label={operation.title}
              >
                {operation.icon}
              </span>
              <Heading as="h2" size="md" mb={2}>
                {operation.title}
              </Heading>
            </Box>
          </PopoverTrigger>
          <PopoverContent
            borderColor="gray.200"
            boxShadow="lg"
            p={4}
            _hover={{ boxShadow: "lg" }}
          >
            <PopoverBody>
              {operation.description}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Link>
    </motion.div>
  );
}

export default OperationCard;
