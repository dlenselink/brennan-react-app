import { Navigate, useRoutes } from 'react-router-dom';
import { HomePage, VehiclesPage, FavoritesPage } from 'pages';

const Routing = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/vehicles',
      element: <VehiclesPage />,
    },
    {
      path: '/favorites',
      element: <FavoritesPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};

export default Routing;
