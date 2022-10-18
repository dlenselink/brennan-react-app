// import useSWR from 'swr';
// import { fetcher } from 'network';
import { PageTitle, PageWrapper, VehicleTable } from 'components'; // ErrorMessage,
import { flattenVehicleMakeData, VehicleJson } from 'data';

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
