// import useSWR from 'swr';
// import { fetcher } from 'network';
import { PageTitle, PageWrapper, VehicleTable } from 'components'; // ErrorMessage,
import { useFavorites } from 'contexts';
import { flattenVehicleMakeData, VehicleJson } from 'data';

const FavoritesPage = () => {
  // const { data, error } = useSWR('/localhost:8080/make', fetcher);
  const {
    state: { favorites },
  } = useFavorites();

  // if (error || !data) return <ErrorMessage />;
  const rowData = flattenVehicleMakeData(VehicleJson).filter((vehicle) =>
    favorites.includes(vehicle.id)
  );

  return (
    <PageWrapper>
      <PageTitle title="Favorite Vehicles" />
      <VehicleTable type="favorites" rowData={rowData} />
    </PageWrapper>
  );
};

export default FavoritesPage;
