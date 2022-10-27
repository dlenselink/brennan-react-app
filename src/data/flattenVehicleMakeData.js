const flattenVehicleMakeData = (data) =>
  data.map(({ vehicleMakeName, vehicleModelList }) => ({
    make: vehicleMakeName,
    ...vehicleModelList.reduce(
      (accumModel, { vehicleModelName, vehicleList }) => ({
        ...accumModel,
        model: vehicleModelName,
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
