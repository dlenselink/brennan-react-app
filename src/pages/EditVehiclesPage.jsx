import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { VehicleTable } from 'components';
import VehicleJson from 'data/vehicles.json';

const classes = {
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    padding: '24px',
  },
};

const EditVehiclesPage = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.title}>
        <Typography variant="h1" fontSize="24px">
          Manage Vehicles
        </Typography>
      </Box>
      <VehicleTable type="manage" rowData={VehicleJson} />
    </Box>
  );
};

export default EditVehiclesPage;
