import { useEffect, useState } from 'react';
import { PageTitle, PageWrapper, VehicleTable } from 'components'; // ErrorMessage,
import { flattenVehicleMakeData } from 'data';
import { defaultHeaders } from '../utils';

const EditVehiclesPage = () => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/make/', { headers: defaultHeaders() })
      .then((res) => res.json())
      .then((json) => {
        setVehicleData(json);
        console.log(vehicleData);
      });
  }, []);

  const rowData = flattenVehicleMakeData(vehicleData);
  console.log(rowData);

  return (
    <PageWrapper>
      <PageTitle title="Manage Vehicles" />
      <VehicleTable type="manage" rowData={rowData} />
    </PageWrapper>
  );
};

export default EditVehiclesPage;
