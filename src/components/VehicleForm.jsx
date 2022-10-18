import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const classes = {
  button: {
    padding: '8px 16px',
    margin: '0 12px',
  },
};

const VehicleForm = ({ onSave }) => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [vin, setVin] = useState('');

  return (
    <Box
      component="form"
      // noValidate
      // autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: '2px solid black',
        borderRadius: '6px',
        backgroundColor: (theme) => theme.palette.grey[200],
        padding: '16px',
      }}
    >
      <TextField
        required
        id="year"
        label="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <TextField
        required
        id="make"
        label="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <TextField
        required
        id="model"
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <TextField
        required
        id="color"
        label="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <TextField
        required
        id="vin"
        label="VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 0' }}
      >
        <Button
          type="button"
          color="primary"
          sx={classes.button}
          onClick={() => onSave({ year, make, model, color, vin })}
        >
          Save
        </Button>
        <Button
          type="button"
          color="error"
          sx={classes.button}
          onClick={() => {
            setYear('');
            setMake('');
            setModel('');
            setColor('');
            setVin('');
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

VehicleForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default VehicleForm;
