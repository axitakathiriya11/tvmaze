import "./App.css";
import { Box, useColorMode } from "@chakra-ui/react";

import NavBar from "./Components/NavBar";
import { useState } from "react";
import Actor from "./Components/Actor";
import Show from "./Components/Show";
import EmptyView from "./Components/EmptyView";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const [searchType, setSearchType] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const toggleSearchType = (type) => {
    console.log(type);
    setSearchType(type);
    setSearchKey("");
  };

  const handleSearchEvent = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <>
      <NavBar
        isDarkMode={isDarkMode}
        toggleColorMode={toggleColorMode}
        toggleSearchType={toggleSearchType}
        handleSearchEvent={handleSearchEvent}
        searchKey={searchKey}
        searchType={searchType}
      />

      {searchKey.length > 0 ? (
        searchType == 0 ? (
          <Actor searchKey={searchKey} />
        ) : (
          <Show searchKey={searchKey} />
        )
      ) : (
        <EmptyView emptyMessage={"List is Empty!"} />
      )}
    </>
  );
}

export default App;
