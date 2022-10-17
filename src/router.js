import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage, VehiclesPage, FavoritesPage } from 'pages';

const router = createBrowserRouter([
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

export default router;
