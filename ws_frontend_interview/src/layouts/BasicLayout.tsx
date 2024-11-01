import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function BasicLayout() {
  return (
    <Container maxWidth='lg' sx={{
      py: 3,
    }}>
      <Outlet />
    </Container>
  );
}