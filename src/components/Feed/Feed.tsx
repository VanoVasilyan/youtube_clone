import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
    >
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        Sidebar
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright {currentYear}
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed