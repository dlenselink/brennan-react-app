import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh' }}>
    <Navigation />
    <Outlet />
  </Box>
);

export default Layout;
