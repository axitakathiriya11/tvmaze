import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import Card from "./Card";
import EmptyView from "./EmptyView";

function AllShows() {
  const [data, setData] = useState([]);

  let api_url = "https://api.tvmaze.com/shows?page=1";

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
    getShowsData();
  });

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
              title={item.name}
              imageURL={
                item.image
                  ? item.image.medium
                  : "https://awu.ac.in/assets/img/posters/default_poster.png"
              }
              href={item.url}
              rating={item.rating.average}
              language={item.language}
              desc={item.summary}
            />
          ))}
        </Box>
      ) : (
        <EmptyView emptyMessage={"No Result Found!"} />
      )}
    </>
  );
}

export default AllShows;
