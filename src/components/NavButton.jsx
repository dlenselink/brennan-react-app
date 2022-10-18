import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const NavButton = ({ text, onClick, isHighlighted = false }) => (
  <Button
    key={text}
    variant="text"
    onClick={onClick}
    sx={{
      margin: '0 8px',
      padding: '8px 12px',
      color: (theme) => (isHighlighted ? theme.palette.primary.dark : 'white'),
      '&:hover': {
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: (theme) => theme.palette.primary.dark,
          height: '2px',
          borderRadius: '0 6px 6px 0',
        },
      },
    }}
  >
    {text}
  </Button>
);

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isHighlighted: PropTypes.bool,
};

NavButton.defaultProps = {
  isHighlighted: false,
};

export default NavButton;
