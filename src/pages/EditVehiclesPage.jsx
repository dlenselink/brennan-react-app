// import { useEffect, useState } from 'react';
import { PageTitle, PageWrapper, VehicleTable } from 'components'; // ErrorMessage,
import { flattenVehicleMakeData, VehicleJson } from 'data';
// import { defaultHeaders } from '../utils';

const EditVehiclesPage = () => {
  // const [vehicleData, setVehicleData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/make/', { headers: defaultHeaders() })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setVehicleData(json);
  //     });
  // }, []);

  // const rowData = flattenVehicleMakeData(vehicleData);

  const rowData = flattenVehicleMakeData(VehicleJson);

  return (
    <PageWrapper>
      <PageTitle title="Manage Vehicles" />
      <VehicleTable type="manage" rowData={rowData} />
    </PageWrapper>
  );
};

export default EditVehiclesPage;
