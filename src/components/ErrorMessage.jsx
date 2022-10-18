import { PageWrapper } from './MuiStyled';
import Typography from '@mui/material/Typography';

const ErrorMessage = () => (
  <PageWrapper>
    <Typography variant="h4">An error occurred while fetching data.</Typography>
  </PageWrapper>
);

export default ErrorMessage;
