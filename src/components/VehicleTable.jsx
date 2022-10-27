import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VehicleForm } from 'components';
import { useFavorites } from 'contexts';
import { defaultVehicleValues } from 'data';
import { defaultHeaders } from 'utils';

const classes = {
  root: { margin: '16px' },
  modalWrapper: { display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' },
  table: { minWidth: 880, padding: '8px' },
  tableRow: { '&:last-child td, &:last-child th': { border: 0 } },
};

const VehicleTable = ({ type, rowData }) => {
  const { state, dispatch } = useFavorites();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState();

  const handleEditClick = ({ year, make, model, color, licensePlate, vin }) => {
    setEditModalData({ year, make, model, color, licensePlate, vin });
    setIsEditModalOpen(true);
  };

  const onEditSave = ({ id, year, make, model, color, licensePlate, vin }) => {
    const data = { id, year, make, model, color, licensePlate, vin };
    const config = {
      headers: defaultHeaders(),
    };

    axios
      .put('http://localhost:8080/vehicle/dto/', data, config)
      .then((res) => {
        console.log('PUT SUCCESS');
        console.log(res);
      })
      .catch((err) => {
        console.log('PUT FAILURE');
        console.error(err);
      })
      .finally(() => {
        setIsEditModalOpen(false);
      });

    // fetch('http://localhost:8080/vehicle/', {
    //   method: 'PATCH',
    //   body: JSON.stringify({ color, licensePlate }),
    //   headers: defaultHeaders(),
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log('Saved vehicle edit to db! response json below:');
    //     console.log(json);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   })
    //   .finally(() => {
    //     setIsEditModalOpen(false);
    //   });
  };

  const onEditCancel = () => {
    setIsEditModalOpen(false);
    setEditModalData(defaultVehicleValues);
  };

  return (
    <>
      <Box sx={classes.root}>
        <TableContainer component={Paper}>
          <Table sx={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Favorite</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Make</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">License Plate</TableCell>
                <TableCell align="right">VIN</TableCell>
                {type === 'manage' && (
                  <>
                    <TableCell align="right">Edit</TableCell>
                    <TableCell align="right">Delete</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map(({ id, year, make, model, color, licensePlate, vin }) => (
                <TableRow key={id} sx={classes.tableRow}>
                  <TableCell component="th" scope="row">
                    <IconButton onClick={() => dispatch({ type: 'toggle', payload: id })}>
                      {state.favorites.includes(id) ? (
                        <FavoriteIcon color="error" />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{year}</TableCell>
                  <TableCell align="right">{make}</TableCell>
                  <TableCell align="right">{model}</TableCell>
                  <TableCell align="right">{color}</TableCell>
                  <TableCell align="right">{licensePlate}</TableCell>
                  <TableCell align="right">{vin}</TableCell>
                  {type === 'manage' && (
                    <>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => handleEditClick({ year, make, model, color, vin })}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Modal open={isEditModalOpen}>
        <Box sx={classes.modalWrapper}>
          <VehicleForm onSave={onEditSave} onCancel={onEditCancel} defaults={editModalData} />
        </Box>
      </Modal>
    </>
  );
};

VehicleTable.propTypes = {
  type: PropTypes.oneOf(['manage', 'favorites']).isRequired,
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      licensePlate: PropTypes.string.isRequired,
      vin: PropTypes.string.isRequired,
    })
  ),
};

export default VehicleTable;
