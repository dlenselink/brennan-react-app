import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const flattenVehicleMakeData = (data) =>
  data.map(({ makeName, vehicleModelList }) => ({
    make: makeName,
    ...vehicleModelList.reduce(
      (accumModel, { vehicleModelName, vehicleList }) => ({
        ...accumModel,
        name: vehicleModelName,
        ...vehicleList.reduce(
          (accumVehicle, { id, year, vin, color, purchasePrice }) => ({
            ...accumVehicle,
            id,
            year,
            vin,
            color,
            purchasePrice,
          }),
          {}
        ),
      }),
      {}
    ),
  }));

export { fetcher, flattenVehicleMakeData };
