import { PageTitle, PageWrapper, VehicleForm } from 'components';

const onSave = ({ year, make, model, color, licensePlate, vin }) => {
  // replace this with DB post call
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',

        }
    }
  console.log({ year, make, model, color,licensePlate, vin });
};

const AddVehiclesPage = () => (
  <PageWrapper>
    <PageTitle title="Add Vehicles" />
    <VehicleForm onSave={onSave} />
  </PageWrapper>
);

export default AddVehiclesPage;
