import { Box, Toolbar, Typography, CssBaseline, List, Divider } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import { categories } from '../utils/constants'
import { useState } from "react";
import SearchBar from "./SearchBar";


const drawerWidth = 223;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6.5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6.5)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'revert',
    borderBottom: '0px',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Categories({selectedCategory, setSelectedCategory}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', overflowY: "auto", height: { sx:'auto', md: '95%', flexDirection: {md: 'column'}} }} direction="row">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ background: "#141414", borderColor: '#141414', height: '10px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="." >
            <img src={'logo.png'} alt="logo" height="65px"/>
          </Link>
          <Link to=".">
            <Typography variant="h6" component="div" color="white" fontWeight="bold">
              Animal
            </Typography>
          </Link>
          <Link to=".">
            <Typography variant="h6" component="div" color="red" fontWeight="bold" >
              Tube
            </Typography>
          </Link>
          <Divider orientation="vertical" />
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{ style: {borderColor: "black",}}}>
        <DrawerHeader sx={{ background: "#141414"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <MenuIcon color="error" /> : <MenuIcon color="error" />}
          </IconButton>
        </DrawerHeader>
        <Divider color="black"/>
        <List sx={{ background: "#141414", height: "100%"}}>
          {categories.map((category) => (
           <button className="category-btn" onClick={() => setSelectedCategory (category.name)} 
                   style={{background: category.name === selectedCategory && "#FC1503", color: "white" }} key={category.name}>
              <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px"}}>{category.icon}</span>
              <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
            </button>
          ))}
          
        </List>
        <Typography className="copyright" variant="body2" sx={{ background: "#141414", mb: "auto", color: "#4f4f4f", fontSize: 10, alignContent: "flex-end"}}>
            Copyright©<br/>
             2022 <br/>
             ScottCodes
        </Typography>
        <Divider color="black"/>
      </Drawer>
    </Box>
    );
  };