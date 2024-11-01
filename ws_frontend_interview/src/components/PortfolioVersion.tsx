import React from 'react';
import { Box, Divider, ListItem, ListItemText } from '@mui/material';
import { formatDate } from '../utils/helpers';
import { PortfolioVersion as PortfolioVersionType } from '../gql/graphql';

const PortfolioVersion: React.FC<PortfolioVersionType> = ({ type, createdAt }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <ListItem>
        <ListItemText primary={type} secondary={formatDate(createdAt)} />
      </ListItem>
      <Divider />
    </Box>
  );
};

export default PortfolioVersion;