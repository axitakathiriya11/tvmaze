import React from "react";
import { Box } from "@chakra-ui/react";

function EmptyView({emptyMessage}) {
  return (
    <Box
      h="85vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="row"
    >
      {emptyMessage}
    </Box>
  );
}

export default EmptyView;
