import { PageWrapper, PageTitle, VehicleForm } from 'components';

// replace this with DB post call
const onSave = ({ year, make, model, color, vin }) =>
  console.log({ year, make, model, color, vin });

const AddVehiclesPage = () => (
  <PageWrapper>
    <PageTitle title="Add Vehicles" />
    <VehicleForm onSave={onSave} />
  </PageWrapper>
);

export default AddVehiclesPage;
