import React from 'react';
import {
  Button,
  Grid,
  TextField,
  Typography,
  useTheme
} from '@mui/material';

import { IconProfile, IconCart } from '../../shared/icons/index';

import Search from '../../assets/search.svg';

import { LogoNairuz } from '../Logo/LogoNairuz';

export const Appbar = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor="primary.light"
      padding={1}
      minHeight={theme.spacing(10)}
    >
      <Grid
        container
        marginLeft={theme.spacing(8)}
      >
        <Grid
          item
          display={'flex'}
          alignItems={'center'}
          width={'20%'}
        >
          <LogoNairuz />
        </Grid>

        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          width={'50%'}
        >
          <Grid
            item
            width={'100%'}
          >

            <TextField
              fullWidth
              id="campo-de-pesquisa"
              size="small"
              placeholder="Insira aqui o que você procura..."
              InputProps={{
                endAdornment:
                  <Button>
                    <img style={{ width: '38px' }} src={Search} alt='lupa' />
                  </Button>,
              }}
            />

          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          width={'25%'}
        >
          <Grid
            container
            gap={4}
            flexDirection={'row'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
            >
              <Button
                startIcon={<IconProfile />}
                sx={{
                  textAlign: 'initial',
                  width: '20px',
                  color: 'primary.dark'
                }}
              >
                <Grid container>
                  <Grid item>
                    <Typography fontSize={'14px'} textTransform={'capitalize'}>
                      Meu
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={'16px'} textTransform={'capitalize'}>
                      Perfil
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
            <Grid
              item
              display={'flex'}
              justifyContent={'center'}
            >
              <Button
                startIcon={<IconCart />}
                sx={{
                  textAlign: 'initial',
                  width: '20px',
                  color: 'primary.dark'
                }}
              >
                <Grid container>
                  <Grid item>
                    <Typography fontSize={'14px'} textTransform={'capitalize'}>
                      Meu
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography fontSize={'16px'} textTransform={'capitalize'}>
                      Carrinho
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

