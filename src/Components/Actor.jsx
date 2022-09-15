import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import Card from "./Card";
import EmptyView from "./EmptyView";

function Actor({ searchKey }) {
  const [actorsData, setActorsData] = useState([]);

  let api_url = "";
  if (searchKey.length > 0) {
    api_url = `https://api.tvmaze.com/search/people?q=${searchKey}`;
  }

  const getActorsData = async () => {
    try {
      let respone = await fetch(api_url);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchKey.length > 0) {
      getActorsData();
    }
  }, [searchKey]);

  return (
    <>
      {actorsData != null && actorsData.length > 0 ? (
        <Box
          display="flex"
          flexWrap="wrap"
          gap={12}
          justifyContent="center"
          marginX={{ base: 0, md: 62, lg: 112, xl: 144 }}
          marginY={16}
        >
          {actorsData.map((item, index) => (
            <Card
              key={index}
              title={item.person.name}
              imageURL={
                item.person.image
                  ? item.person.image.medium
                  : "https://awu.ac.in/assets/img/posters/default_poster.png"
              }
              href={item.person.url}
            />
          ))}
        </Box>
      ) : (
        <EmptyView emptyMessage={"No Result Found!"} />
      )}
    </>
  );
}

export default Actor;
