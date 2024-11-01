import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import PortfolioListPage from './pages/PortfolioListPage';
import CreatePortfolioPage from './pages/CreatePortfolioPage';
import PortfolioVersionsPage from './pages/PortfolioVersionsPage';

const routes = createBrowserRouter([
  {
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <PortfolioListPage />,
      },
      {
        path: '/create',
        element: <CreatePortfolioPage />,
      },
      {
        path: '/:portfolioId/versions',
        element: <PortfolioVersionsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;