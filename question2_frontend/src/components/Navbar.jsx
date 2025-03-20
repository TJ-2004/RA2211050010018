import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, fontWeight: 500, fontFamily: 'sans-serif' }}
        >
          📊 Social Media Analytics
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ marginRight: '10px', textTransform: 'none' }}
        >
          Top Users
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/trending"
          style={{ marginRight: '10px', textTransform: 'none' }}
        >
          Trending Posts
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/feed"
          style={{ textTransform: 'none' }}
        >
          Feed
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
