import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const VehicleForm = ({ onSave, onCancel }) => (
  <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button role="button" onClick={onSave}>
      Save
    </Button>
    <Button role="button" onClick={onCancel}>
      Cancel
    </Button>
  </Box>
);

VehicleForm.PropTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default VehicleForm;
