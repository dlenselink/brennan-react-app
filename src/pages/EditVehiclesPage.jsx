// import useSWR from 'swr';
// import { fetcher } from 'network';
import { PageTitle, PageWrapper, VehicleTable } from 'components'; // ErrorMessage,
import { flattenVehicleMakeData } from 'data';
import VehicleJson from 'data/vehicles.json'; // remove and replace VehicleJson with API call result

const EditVehiclesPage = () => {
  // const { data, error } = useSWR('/localhost:8080/make', fetcher);

  // if (error || !data) return <ErrorMessage />;

  const rowData = flattenVehicleMakeData(VehicleJson);

  return (
    <PageWrapper>
      <PageTitle title="Manage Vehicles" />
      <VehicleTable type="manage" rowData={rowData} />
    </PageWrapper>
  );
};

export default EditVehiclesPage;
