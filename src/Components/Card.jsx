import { Box, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Card({ title, imageURL, href, rating, language, desc }) {
  return (
    <Box
      display="flex"
      flexDir="column"
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
          marginBottom="3"
          boxShadow="0 0 20px 0px rgba(0, 0, 0, 0.2)"
        />
      </a>
      <Text fontSize="18px" fontWeight="700" noOfLines={[1]}>
        {title}
      </Text>
      <Box>
        <StarIcon color="yellow" w={4} h={4} marginBottom="1" marginEnd="1" />
        {rating ? rating : "NA"}
      </Box>
      <Text
        fontSize="13px"
        dangerouslySetInnerHTML={{ __html: desc }}
        noOfLines={[1, 2, 3]}
      ></Text>
    </Box>
  );
}

export default Card;
