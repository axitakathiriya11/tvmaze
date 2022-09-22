import React from "react";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

function NavBar({
  isDarkMode,
  toggleColorMode,
  toggleSearchType,
  handleSearchEvent,
  searchKey,
}) {
  return (
    <Box
      bg={isDarkMode ? "blackAlpha.600" : "green.50"}
      borderBottom={isDarkMode ? "1px solid gray" : "1px solid black"}
      h="15vh"
      w="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDir="row"
      padding={{ base: 4, md: 8, lg: 8, xl: 8 }}
      paddingX={{ base: 4, md: 8, lg: 8, xl: 8 }}
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        gap={{ base: 8, md: 8, lg: 12, xl: 12 }}
        alignItems="center"
      >
        <Link>
          <Text fontSize={{ base: "md", md: "md", lg: "xl", xl: "2xl" }}>
            TVmaze
          </Text>
        </Link>
      </Box>

      <Box display="flex" alignItems="center" gap={8}>
        <RadioGroup onChange={toggleSearchType} defaultValue="0">
          <Stack direction="row" gap={3}>
            <Radio size="lg" value="0">
              Actor
            </Radio>
            <Radio size="lg" value="1">
              Shows
            </Radio>
          </Stack>
        </RadioGroup>

        <InputGroup>
          <Input
            placeholder="Search..."
            border="1px solid black"
            color={isDarkMode ? "white" : "black"}
            onChange={handleSearchEvent}
            value={searchKey}
            fontSize={{ base: "10px", md: "lg", lg: "lg", xl: "lg" }}
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>

        <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default NavBar;
