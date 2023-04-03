import React from 'react';
import { Grid, Typography } from '@mui/material';
import Phone from '../../assets/phone.png';

export const Product1 = () => {
  return (
    <Grid
      container
      paddingX={2}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <img src={Phone} alt="phone" />
      <Typography fontSize={'16px'}>
        Produto Exemplo 1
      </Typography>
      <Typography variant='body2' fontSize={'20px'}>
        R$ 79,99
      </Typography>
      <Typography>
        5x de R$ 16,00
      </Typography>
    </Grid>
  );
};

export const Product2 = () => {
  return (
    <Grid
      container
      paddingX={2}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <img src={Phone} alt="phone" />
      <Typography fontSize={'16px'}>
        Produto Exemplo 2
      </Typography>
      <Typography variant='body2' fontSize={'20px'}>
        R$ 99,99
      </Typography>
      <Typography>
        5x de R$ 20,00
      </Typography>
    </Grid>
  );
};

export const Product3 = () => {
  return (
    <Grid
      container
      paddingX={2}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <img src={Phone} alt="phone" />
      <Typography fontSize={'16px'}>
        Produto Exemplo 3
      </Typography>
      <Typography variant='body2' fontSize={'20px'}>
        R$ 119,99
      </Typography>
      <Typography>
        5x de R$ 24,00
      </Typography>
    </Grid>
  );
};

export const Product4 = () => {
  return (
    <Grid
      container
      paddingX={2}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <img src={Phone} alt="phone" />
      <Typography fontSize={'16px'}>
        Produto Exemplo 4
      </Typography>
      <Typography variant='body2' fontSize={'20px'}>
        R$ 139,99
      </Typography>
      <Typography>
        5x de R$ 28,00
      </Typography>
    </Grid>
  );
};

export const Product5 = () => {
  return (
    <Grid
      container
      paddingX={2}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <img src={Phone} alt="phone" />
      <Typography fontSize={'16px'}>
        Produto Exemplo 5
      </Typography>
      <Typography variant='body2' fontSize={'20px'}>
        R$ 142,00
      </Typography>
      <Typography>
        5x de R$ 28,40
      </Typography>
    </Grid>
  );
};

export const Product6 = () => {
  return (
    <Grid
      container
      paddingX={2}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <img src={Phone} alt="phone" />
      <Typography fontSize={'16px'}>
        Produto Exemplo 6
      </Typography>
      <Typography variant='body2' fontSize={'20px'}>
        R$ 146,00
      </Typography>
      <Typography>
        5x de R$ 29,20
      </Typography>
    </Grid>
  );
};
