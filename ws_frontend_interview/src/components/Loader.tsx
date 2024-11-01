import { Box, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;