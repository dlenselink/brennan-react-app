import { PageTitle, PageWrapper, VehicleForm } from 'components';
import { defaultHeaders } from '../utils';

const onSave = ({ year, make, model, color, licensePlate, vin }) => {
  fetch('http://localhost:8080/vehicle/dto/', {
    method: 'POST',
    body: JSON.stringify({ year, make, model, color, licensePlate, vin }),
    headers: defaultHeaders(),
  }).then((r) => console.log(r));
};

const AddVehiclesPage = () => (
  <PageWrapper>
    <PageTitle title="Add Vehicles" />
    <VehicleForm onSave={onSave} />
  </PageWrapper>
);

export default AddVehiclesPage;
