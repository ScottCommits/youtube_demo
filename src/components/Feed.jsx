import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New animal");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=cute+${selectedCategory}`)
        .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box sx={{ height: { sx: "auto", md: "100vh" }, borderRight: "2px solid #777777", px: { sx: 0, md: 0}, width: "0.03"}} >
      <Sidebar selectedCategory= {selectedCategory} setSelectedCategory= {setSelectedCategory} />
      </Box>
      <Box className="feed-size" p={1} sx={{ overflowY: "auto", height: "90vh", width: { xs: "85%", md: "320px", lg: "100%"}, flex: 2, background: "#0c0c0c", ml: "none" }}>
        <Typography variant="h4" fontWeight="bold" mb={1} sx={{ color: "white"}}>
           {selectedCategory} <span style={{ color: "#FC1503"}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};


export default Feed;