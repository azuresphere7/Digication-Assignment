import { useParams } from 'react-router-dom';
import { Box, Fab, List, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useListPortfolioVersionsQuery, useCreateSnapshotVersionMutation } from '../gql/graphql';
import ErrorPage from './ErrorPage';
import Loader from '../components/Loader';
import PortfolioVersion from '../components/PortfolioVersion';
import React from 'react';

export default function PortfolioVersionsPage() {
  const { portfolioId } = useParams();
  const { loading, error, data, refetch } = useListPortfolioVersionsQuery({ variables: { portfolioId: Number(portfolioId) } });
  const [createSnapshotVersion] = useCreateSnapshotVersionMutation();

  const handleCreateSnapshotVersion = async () => {
    await createSnapshotVersion({ variables: { portfolioId: Number(portfolioId) } });
    refetch();
  };

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
        <Typography variant='h4'>My ePortfolio{portfolioId} Versions</Typography>

        <Fab color="primary" aria-label="add" size='medium' onClick={handleCreateSnapshotVersion}>
          <ContentCopyIcon />
        </Fab>
      </Box>

      {loading && <Loader />}

      {data && (
        <List>
          {data.listPortfolioVersions.map((version) => (
            <PortfolioVersion
              key={version.id}
              {...version}
            />
          ))}
        </List>
      )}
    </Box>
  );
}