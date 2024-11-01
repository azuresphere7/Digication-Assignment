import { useNavigate } from 'react-router-dom';
import { Box, Fab, List, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useListPortfoliosQuery } from '../gql/graphql';
import ErrorPage from './ErrorPage';
import Loader from '../components/Loader';
import Portfolio from '../components/Portfolio';
import React from 'react';

export default function PortfolioListPage() {
  const navigate = useNavigate();
  const { loading, error, data, refetch } = useListPortfoliosQuery();

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      maxWidth: '512px',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Typography variant='h4'>My ePortfolios</Typography>

        <Fab color="primary" aria-label="add" size='medium' onClick={() => navigate('/create')}>
          <AddIcon />
        </Fab>
      </Box>

      {loading && <Loader />}

      {data && (
        <List>
          {data.listPortfolios.map((portfolio) => (
            <Portfolio
              key={portfolio.id}
              {...portfolio}
            />
          ))}
        </List>
      )}
    </Box>
  );
}