import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../../utils/fetchFromApi';
import Sidebar from '../Sidebar/Sidebar';
import Videos from '../Videos/Videos';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])

  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
    >
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright {currentYear}
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          New <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        <Videos videos={[{ id: 1 }]} />
      </Box>
    </Stack>
  )
}

export default Feed