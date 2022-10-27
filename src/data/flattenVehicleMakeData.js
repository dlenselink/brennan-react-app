const flattenVehicleMakeData = (data) =>
  data.map(({ makeName, vehicleModelList }) => ({
    makeName,
    ...vehicleModelList.reduce(
      (accumModel, { vehicleModelName, vehicleList }) => ({
        ...accumModel,
        vehicleModelName,
        ...vehicleList.reduce(
          (accumVehicle, { id, year, vin, licensePlate, color }) => ({
            ...accumVehicle,
            id,
            year,
            vin,
            licensePlate,
            color,
          }),
          {}
        ),
      }),
      {}
    ),
  }));

export default flattenVehicleMakeData;
