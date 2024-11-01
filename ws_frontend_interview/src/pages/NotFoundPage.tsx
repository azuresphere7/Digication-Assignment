import { Box, Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Typography variant='h3'>Page Not Found</Typography>
    </Box>
  );
}