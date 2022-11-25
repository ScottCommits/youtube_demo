import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import { Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar } from './components';


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#0c0c0c' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
   

export default App;