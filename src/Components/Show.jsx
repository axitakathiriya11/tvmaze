import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import Card from "./Card";
import EmptyView from "./EmptyView";

function Show({ searchKey }) {
  const [data, setData] = useState([]);

  let api_url = "";
  if (searchKey.length > 0) {
    api_url = `https://api.tvmaze.com/search/shows?q=${searchKey}`;
  }

  const getShowsData = async () => {
    try {
      let respone = await fetch(api_url);
      let resData = await respone.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchKey.length > 0) {
      getShowsData();
    }
  }, [searchKey]);

  return (
    <>
      {data != null && data.length > 0 ? (
        <Box
          display="flex"
          flexWrap="wrap"
          maxW="1400px"
          gap={12}
          justifyContent="center"
          marginX={{ base: 0, md: 62, lg: 112, xl: 144 }}
          marginY={16}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.show.name}
              imageURL={
                item.show.image
                  ? item.show.image.medium
                  : "https://awu.ac.in/assets/img/posters/default_poster.png"
              }
              href={item.show.url}
              rating={item.show.rating.average}
            />
          ))}
        </Box>
      ) : (
        <EmptyView emptyMessage={"No Result Found!"} />
      )}
    </>
  );
}

export default Show;
