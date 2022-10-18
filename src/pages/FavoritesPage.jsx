import { PageTitle, PageWrapper, VehicleTable } from 'components';
import VehicleJson from 'data/vehicles.json'; // remove and replace VehicleJson with API call result

const FavoritesPage = () => (
  <PageWrapper>
    <PageTitle title="Manage Vehicles" />
    <VehicleTable type="favorites" rowData={VehicleJson} />
  </PageWrapper>
);

export default FavoritesPage;
