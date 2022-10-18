import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavButton from './NavButton';
import { Typography } from '@mui/material';

const topNavItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Vehicles',
    link: '/vehicles',
  },
  {
    text: 'Favorites',
    link: '/favorites',
  },
];

const bottomNavItems = [
  {
    text: 'Manage Vehicles',
    link: '/vehicles/edit',
  },
  {
    text: 'Add Vehicle',
    link: '/vehicles/add',
  },
];

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainTitle: {
    marginRight: '64px',
    color: 'white',
    padding: '4px',
    margin: '8px 64px 8px 8px',
    lineHeight: '1em',
  },
  navSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
  },
  topNav: {
    backgroundColor: 'black',
    height: '80px',
  },
  bottomNav: {
    backgroundColor: (theme) => theme.palette.grey[500],
    height: '48px',
  },
};

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={classes.root}>
      <Box
        sx={{
          ...classes.navSection,
          ...classes.topNav,
        }}
      >
        <Typography variant="h4" sx={classes.mainTitle}>
          Car Catalog
        </Typography>
        {topNavItems.map(({ text, link }) => (
          <NavButton
            key={text}
            text={text}
            isHighlighted={
              (link === '/' && location.pathname === '/') ||
              (link !== '/' && location.pathname.includes(link))
            }
            onClick={() => navigate(link)}
          />
        ))}
      </Box>
      {!!location.pathname.includes('vehicles') && (
        <Box
          sx={{
            ...classes.navSection,
            ...classes.bottomNav,
          }}
        >
          {bottomNavItems.map(({ text, link }) => (
            <NavButton
              key={text}
              text={text}
              isHighlighted={location.pathname === link}
              onClick={() => navigate(link)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navigation;
