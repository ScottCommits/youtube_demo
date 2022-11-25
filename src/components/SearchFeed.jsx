import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {

  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "", height: "100%", flex: 2, ml: "50px", position: "top", background: "#0c0c0c"}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for <span style={{ color: "#F31503"}}>{searchTerm}</span> videos
      </Typography>
        
        {<Videos videos={videos} />}
      </Box>
  );
};


export default SearchFeed;