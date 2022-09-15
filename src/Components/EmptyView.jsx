import React from "react";
import { Box, Text } from "@chakra-ui/react";

function EmptyView({ emptyMessage }) {
  return (
    <Box
      h="85vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="2xl">{emptyMessage}</Text>
    </Box>
  );
}

export default EmptyView;
