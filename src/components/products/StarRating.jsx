import { Box, Flex, Text } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="orange" />);
  }

  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt key="half" color="orange" />
    );
  }

  const emptyStars = 5 - stars.length;

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} color="orange" />
    );
  }

  return (
    <Flex>
      <Box>
        {stars.map((star, index) => (
          <Box key={index} display="inline-block">
            {star}
          </Box>
        ))}
      </Box>
      <Text ml="2">{rating.toFixed(1)}</Text>
    </Flex>
  );
};

export default StarRating;
