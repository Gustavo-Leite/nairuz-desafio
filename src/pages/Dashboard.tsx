import * as React from 'react';
import { Grid } from '@mui/material';

import imgMain from '../assets/img-main.png';

import {
  Advertising,
  Appbar,
  Toolbar,
  Products,
  CardForm,
  Footer
} from '../components';

export const OnePage = () => {

  return (
    <Grid height="100%">
      <Advertising />
      <Appbar />
      <Toolbar />

      <Grid
        container
        overflow="auto"
        width={'100%'}
        justifyContent="center"
      >
        <img src={imgMain} style={{ width: '100%' }} alt="img-main" />
      </Grid>

      <Products />

      <CardForm />

      <Footer />
    </Grid>
  );
};