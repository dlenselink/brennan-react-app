import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const defaultValues = {
  year: '',
  make: '',
  model: '',
  color: '',
  vin: '',
};

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    border: '2px solid black',
    borderRadius: '6px',
    backgroundColor: (theme) => theme.palette.grey[200],
    padding: '16px',
  },
  button: {
    padding: '8px 16px',
    margin: '0 12px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 0',
  },
};

const VehicleForm = ({ onSave, onCancel, defaults = defaultValues }) => {
  const [year, setYear] = useState(defaults.year);
  const [make, setMake] = useState(defaults.make);
  const [model, setModel] = useState(defaults.model);
  const [color, setColor] = useState(defaults.color);
  const [vin, setVin] = useState(defaults.vin);

  const clearForm = () => {
    setYear('');
    setMake('');
    setModel('');
    setColor('');
    setVin('');
  };

  const handleSaveClick = (e) => {
    if (year && make && model && color && vin) {
      onSave({ year, make, model, color, vin });
      clearForm();
      e.preventDefault();
    }
  };

  const handleCancelClick = () => {
    clearForm();
    if (onCancel) onCancel();
  };

  return (
    <Box component="form" autoComplete="off" sx={classes.root}>
      <TextField
        required
        id="year"
        label="Year"
        value={year}
        onInput={(e) => setYear(e.target.value)}
      />
      <TextField
        required
        id="make"
        label="Make"
        value={make}
        onInput={(e) => setMake(e.target.value)}
      />
      <TextField
        required
        id="model"
        label="Model"
        value={model}
        onInput={(e) => setModel(e.target.value)}
      />
      <TextField
        required
        id="color"
        label="Color"
        value={color}
        onInput={(e) => setColor(e.target.value)}
      />
      <TextField
        required
        id="vin"
        label="VIN"
        value={vin}
        onInput={(e) => setVin(e.target.value)}
      />
      <Box sx={classes.buttonWrapper}>
        <Button type="submit" color="primary" sx={classes.button} onClick={handleSaveClick}>
          Save
        </Button>
        <Button type="button" color="error" sx={classes.button} onClick={handleCancelClick}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

VehicleForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  defaults: PropTypes.shape({
    year: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    vin: PropTypes.string.isRequired,
  }),
};

export default VehicleForm;
