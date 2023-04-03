import React from 'react';
import {
  useTheme,
  Grid,
  Typography
} from '@mui/material';

export const Toolbar = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      bgcolor="primary.main"
      padding={1}
      color={'primary.contrastText'}
      minHeight={theme.spacing(6)}
    >
      <Grid
        container
        alignItems={'center'}
        marginLeft={theme.spacing(8)}
        gap={10}
      >
        <Grid
          item
        >
          <Typography>
            Todas as Categorias
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Typography>
            Tecnologia
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Typography>
            Marketing
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Typography>
            Full-Service
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Typography>
            Mídias Pagas
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Typography>
            SEO
          </Typography>
        </Grid>
        <Grid
          item
        >
          <Typography>
            Inbound
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

