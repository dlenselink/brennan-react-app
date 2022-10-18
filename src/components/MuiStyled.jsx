import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageWrapper = styled(Box)({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
});

const PageTitle = ({ title }) => (
  <Box
    sx={{
      display: 'flex',
      padding: '24px',
    }}
  >
    <Typography variant="h1" fontSize="24px">
      {title}
    </Typography>
  </Box>
);

export { PageWrapper, PageTitle };
