import { PageTitle, PageWrapper, VehicleTable } from 'components';
import VehicleJson from 'data/vehicles.json'; // remove and replace VehicleJson with API call result

const FavoritesPage = () => (
  <PageWrapper>
    <PageTitle title="Favorite Vehicles" />
    <VehicleTable type="favorites" rowData={VehicleJson} />
  </PageWrapper>
);

export default FavoritesPage;
