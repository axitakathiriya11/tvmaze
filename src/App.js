import "./App.css";

import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";

import NavBar from "./Components/NavBar";
import Actor from "./Components/Actor";
import Show from "./Components/Show";
import EmptyView from "./Components/EmptyView";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const [searchType, setSearchType] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const toggleSearchType = (type) => {
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
