import { Box, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Typography variant='h3'>Something went wrong! Please refresh your page.</Typography>
    </Box>
  );
}