import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './components/Feed/Feed';
import Navbar from './components/Navbar/Navbar';
import ChannelDetail from './components/ChannelDetail/ChannelDetail';
import VideoDetail from './components/VideoDetail/VideoDetail';
import SearchFeed from './components/SearchFeed/SearchFeed';
import './App.css';

const App = () => (
  <Box sx={{ backgroundColor: '#000' }}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  </Box>
)

export default App;
