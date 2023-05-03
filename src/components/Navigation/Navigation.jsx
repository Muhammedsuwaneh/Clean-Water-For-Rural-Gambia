import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact Us'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding  component={NavLink} to="/">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
            <IconButton color="inherit" component={NavLink} to="/" sx={{ '&:hover': { color: 'red'} }}>
                <FacebookIcon textDecoration="none" color="#fff"/>
            </IconButton>
            <IconButton color="inherit" component={NavLink} to="/" sx={{ '&:hover': { color: 'red'} }}>
                <InstagramIcon textDecoration="none" color="#fff" />
            </IconButton>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#001E3C'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{  flexGrow: 1, display: 'flex' }}>
            <img alt="gambian flag" width="30px" height="30px"
              src="data:image/jpeg;base64,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"/>
            <Typography
              variant="h6"
              component="div"
              sx={{ margin: "0 1rem", textTransform: 'uppercase', fontSize: { sm: '1rem', xs: '1rem', lg: '1.2rem', md: '1rem'} }}
            >
              Clean Water for Gambia
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', '&:hover': { background: 'red'} }} component={NavLink} 
              to={`${(item === "Home") ? "/": "#"+item.toLowerCase()}`}>
                {item}
              </Button>
            ))}
            <Button variant="contained" sx={{ margin: '0 1rem', color: '#fff', '&:hover': { background: 'red'} }}
            component={NavLink} to="/donate">
                Donate
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <IconButton color="inherit" component={NavLink} to="/" sx={{ '&:hover': { color: 'red'} }}>
                <FacebookIcon textDecoration="none" color="#fff"/>
            </IconButton>
            <IconButton color="inherit" component={NavLink} to="/" sx={{ '&:hover': { color: 'red'} }}>
                <InstagramIcon textDecoration="none" color="#fff" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;