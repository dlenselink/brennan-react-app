import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const createData = (name, calories, fat, carbs, protein) => ({
  name,
  calories,
  fat,
  carbs,
  protein,
});

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const VehicleTable = ({ type, rowData }) => (
  <Box sx={{ margin: '16px' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 880, padding: '8px' }}>
        <TableHead>
          <TableRow>
            <TableCell>Favorite</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Color</TableCell>
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
          {rowData.map(
            ({
              id,
              isFavorite,
              year,
              make,
              model,
              color,
              vin,
              onEditClick,
              onDeleteClick,
              onFavoriteClick,
            }) => (
              <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <IconButton onClick={onFavoriteClick}>
                    {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                  </IconButton>
                </TableCell>
                <TableCell align="right">{year}</TableCell>
                <TableCell align="right">{make}</TableCell>
                <TableCell align="right">{model}</TableCell>
                <TableCell align="right">{color}</TableCell>
                <TableCell align="right">{vin}</TableCell>
                {type === 'manage' && (
                  <>
                    <TableCell align="right">
                      <IconButton onClick={onEditClick} sx={{ paddingRight: 0 }}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={onDeleteClick}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </>
                )}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

VehicleTable.propTypes = {
  type: PropTypes.oneOf(['manage', 'favorites']).isRequired,
  rowData: PropTypes.array.isRequired,
};

export default VehicleTable;
