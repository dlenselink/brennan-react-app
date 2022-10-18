import useSWR from 'swr';
import { ErrorMessage, PageTitle, PageWrapper, VehicleTable } from 'components';
import { fetcher } from 'utils';

const EditVehiclesPage = () => {
  const { data, error } = useSWR('/localhost:8080/make', fetcher);

  if (error) return <ErrorMessage />;

  return (
    <PageWrapper>
      <PageTitle title="Manage Vehicles" />
      <VehicleTable type="manage" rowData={data} />
    </PageWrapper>
  );
};

export default EditVehiclesPage;
