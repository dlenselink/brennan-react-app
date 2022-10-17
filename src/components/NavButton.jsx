import Button from '@mui/material/Button';

const NavButton = ({ text, isHighlighted, onClick }) => (
  <Button
    key={text}
    variant="text"
    onClick={onClick}
    sx={{
      margin: '0 8px',
      padding: '8px 12px',
      color: (theme) => (isHighlighted ? theme.palette.primary.main : 'white'),
      '&:hover': {
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          height: '2px',
          borderRadius: '0 6px 6px 0',
        },
      },
    }}
  >
    {text}
  </Button>
);

export default NavButton;
