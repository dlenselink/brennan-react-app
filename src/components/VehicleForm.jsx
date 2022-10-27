import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { defaultVehicleValues } from 'data';

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

const VehicleForm = ({ onSave, onCancel, defaults = defaultVehicleValues }) => {
  const [id, setId] = useState(defaults.id);
  const [year, setYear] = useState(defaults.year);
  const [makeName, setMakeName] = useState(defaults.makeName);
  const [vehicleModelName, setVehicleModelName] = useState(defaults.vehicleModelName);
  const [color, setColor] = useState(defaults.color);
  const [licensePlate, setLicensePlate] = useState(defaults.licensePlate);
  const [vin, setVin] = useState(defaults.vin);

  const clearForm = () => {
    setId(defaults.id);
    setYear(defaults.year);
    setMakeName(defaults.makeName);
    setVehicleModelName(defaults.vehicleModelName);
    setColor(defaults.color);
    setLicensePlate(defaults.licensePlate);
    setVin(defaults.vin);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    if (id && year && makeName && vehicleModelName && color && licensePlate && vin) {
      onSave({ id, year, makeName, vehicleModelName, color, licensePlate, vin });
      clearForm();
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
        value={makeName}
        onInput={(e) => setMakeName(e.target.value)}
      />
      <TextField
        required
        id="model"
        label="Model"
        value={vehicleModelName}
        onInput={(e) => setVehicleModelName(e.target.value)}
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
        id="licensePlate"
        label="LicensePlate"
        value={licensePlate}
        onInput={(e) => setLicensePlate(e.target.value)}
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
    makeName: PropTypes.string.isRequired,
    vehicleModelName: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
    vin: PropTypes.string.isRequired,
  }),
};

export default VehicleForm;
