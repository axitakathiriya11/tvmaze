import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ title, imageURL, href }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      gap={3}
      _hover={{
        transform: "scale(1.1)",
        transition: "all 300ms ease-in",
        zIndex: 2,
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

      <Box>
        <Text>{title}</Text>
      </Box>
    </Box>
  );
};

export default Card;
