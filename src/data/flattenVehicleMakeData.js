const flattenVehicleMakeData = (data) =>
  data.map(({ makeName, vehicleModelList }) => ({
    make: makeName,
    ...vehicleModelList.reduce(
      (accumModel, { vehicleModelName, vehicleList }) => ({
        ...accumModel,
        model: vehicleModelName,
        ...vehicleList.reduce(
          (accumVehicle, { id, year, vin, color }) => ({
            ...accumVehicle,
            id,
            year,
            vin,
            color,
          }),
          {}
        ),
      }),
      {}
    ),
  }));

export default flattenVehicleMakeData;
