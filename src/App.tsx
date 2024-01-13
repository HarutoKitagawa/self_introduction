import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  // IconButton,
  Button,
  Typography
} from '@mui/material';
import { Home } from '@mui/icons-material';

const App = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Button
            color='inherit'
            sx={{ mr: 2 }}
          >
            <Home fontSize='large'/>
          </Button>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Haruto Kitagawa's Home Page
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default App;
