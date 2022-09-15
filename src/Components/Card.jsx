import { Box, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Card({ title, imageURL, href, rating }) {
  return (
    <Box
      display="flex"
      flexDir="column"
      gap={3}
      _hover={{
        transform: "scale(1.1)",
        transition: "all 300ms ease-in",
        cursor: "pointer",
      }}
      maxW={{ base: 200, md: 180, lg: 200, xl: 200 }}
    >
      <a href={href} target="_">
        <Image
          src={`${imageURL}`}
          width="215px"
          height="300px"
          borderRadius="10px"
          boxShadow="0 0 20px 0px rgba(0, 0, 0, 0.2)"
        />
      </a>

      <Box
        display="flex"
        flexDir="row"
        gap={1}
        alignItems="center"
        justifyContent="center"
      >
        <Text>{title}</Text>
      </Box>
    </Box>
  );
}

export default Card;
