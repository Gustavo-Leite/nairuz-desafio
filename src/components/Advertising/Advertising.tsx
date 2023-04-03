import React from 'react';
import {
  useTheme,
  Grid,
  Typography,
  Button
} from '@mui/material';

import imgIg from '../../assets/Icon-instagram.svg';
import imgFb from '../../assets/Icon-facebook.svg';
import imgYt from '../../assets/Icon-youtube.svg';


export const Advertising = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor="secondary.dark"
      padding={1}
      justifyContent="space-around"
      minHeight={theme.spacing(5)}
    >
      <Grid
        container
        color={'primary.contrastText'}
        marginLeft={theme.spacing(8)}
        flexDirection={'row'}
      >
        <Grid
          container
          gap={10}
          width={'65%'}
          alignItems={'center'}
          flexDirection={'row'}
        >
          <Typography variant='body1' >Parcelamento em até 12x sem juros</Typography>
          <Typography variant='body1' >Desconto de 10% à vista</Typography>
          <Typography variant='body1' >Compra garantida</Typography>
        </Grid>
        <Grid
          container
          justifyContent={'center'}
          flexDirection={'row'}
          width={'35%'}
        >
          <Grid
            container
            justifyContent={'center'}
          >
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
            >
              <Button variant='text'>
                <img
                  src={imgIg}
                  alt='igIcon'
                  style={{ width: '18px' }}
                />
              </Button>
            </Grid>
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
            >
              <Button variant='text'>
                <img
                  src={imgFb}
                  alt='fbIcon'
                  style={{ width: '18px' }}
                />
              </Button>
            </Grid>
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
            >
              <Button variant='text'>
                <img
                  src={imgYt}
                  alt='ytIcon'
                  style={{ width: '18px' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

