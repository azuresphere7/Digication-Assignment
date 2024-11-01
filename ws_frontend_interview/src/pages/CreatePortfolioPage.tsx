import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useCreatePortfolioMutation, ListPortfoliosQuery } from '../gql/graphql';
import ErrorPage from './ErrorPage';

export default function CreatePortfolioPage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState<string>('');
  const [url, setUrl] = React.useState<string>('');
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const [createPortfolio, { loading, error }] = useCreatePortfolioMutation({
    refetchQueries: [{ query: ListPortfoliosQuery }],
  });

  const handleSubmit = async () => {
    try {
      await createPortfolio({ variables: { name, url } });
      navigate('/');
    } catch (e) {
      console.error('Error creating portfolio:', e);
    }
  };

  React.useEffect(() => {
    if (name && url) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, url]);

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
      <Typography variant='h4'>Create new ePortfolio</Typography>

      <TextField
        label='Name'
        variant='filled'
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />

      <TextField
        label='URL'
        variant='filled'
        value={url}
        onChange={({ target: { value } }) => setUrl(value)}
      />

      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <Button
          variant='contained'
          disabled={!isValid || loading}
          onClick={handleSubmit}
          sx={{
            width: '105px',
            height: '42px',
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Create'}
        </Button>
      </Box>
    </Box>
  );
}