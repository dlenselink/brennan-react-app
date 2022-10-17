import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'components';
import { AddVehiclesPage, EditVehiclesPage, HomePage, FavoritesPage } from 'pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/vehicles',
        element: <Outlet />,
        children: [
          {
            path: 'add',
            element: <AddVehiclesPage />,
          },
          {
            path: 'edit',
            element: <EditVehiclesPage />,
          },
          {
            path: '',
            element: <Navigate to="/vehicles/edit" />,
          },
        ],
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
