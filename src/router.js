import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { AddVehiclesPage, EditVehiclesPage, HomePage, FavoritesPage } from 'pages';
import { Layout } from 'components';

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
