import React from 'react';
import {
  useTheme,
  Grid,
  Divider,
  Typography
} from '@mui/material';


export const Footer = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor="primary.light"
      justifyContent={'space-around'}
      minHeight={theme.spacing(2)}
    >
      <Divider style={{ border: '1px solid #D2D2D2', width: '80%' }} />
      <Grid
        item
        marginY={1.5}
        padding={2}
      >
        <Typography variant='h6' fontSize={'16px'}>Nairuz Marketing e Tecnologia® 2023 / todos os direitos reservados</Typography>
      </Grid>
    </Grid>
  );
};