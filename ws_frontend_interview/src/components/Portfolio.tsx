import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, ListItemButton, ListItemText } from '@mui/material';
import { formatDate } from '../utils/helpers';
import { Portfolio as PortfolioType } from '../gql/graphql';

const Portfolio: React.FC<PortfolioType> = ({ id, name, createdAt }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <ListItemButton onClick={() => navigate(`/${id}/versions`)}>
        <ListItemText primary={name} secondary={formatDate(createdAt)} />
      </ListItemButton>
      <Divider />
    </Box>
  );
};

export default Portfolio;