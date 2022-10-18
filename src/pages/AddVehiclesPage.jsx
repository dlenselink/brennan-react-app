import { PageWrapper, PageTitle, VehicleForm } from 'components';

const onSave = ({ year, make, model, color, vin, purchasePrice }) => {
  // replace this with DB post call
  console.log({ year, make, model, color, vin, purchasePrice });
};

const AddVehiclesPage = () => (
  <PageWrapper>
    <PageTitle title="Add Vehicles" />
    <VehicleForm onSave={onSave} />
  </PageWrapper>
);

export default AddVehiclesPage;
