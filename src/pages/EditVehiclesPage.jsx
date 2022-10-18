import { PageTitle, PageWrapper, VehicleTable } from 'components';
import VehicleJson from 'data/vehicles.json'; // remove and replace VehicleJson with API call result

const EditVehiclesPage = () => (
  <PageWrapper>
    <PageTitle title="Manage Vehicles" />
    <VehicleTable type="manage" rowData={VehicleJson} />
  </PageWrapper>
);

export default EditVehiclesPage;
