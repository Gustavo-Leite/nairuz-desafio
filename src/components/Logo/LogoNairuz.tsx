import React from 'react';
import { Grid } from '@mui/material';

import Logo from '../../assets/logo-nairuz.svg';

export const LogoNairuz = () => {
  return (
    <Grid
      item
      width= '102px'
      display='flex'
      alignItems='center'
      justifyContent='end'
    >
      <img
        src={Logo}
        width={'100%'}
        alt="logo" />
    </Grid>
  );
};