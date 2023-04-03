import React from 'react';
import {
  useTheme,
  Grid,
  Typography
} from '@mui/material';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
} from './Product';

import Slider from '../Slider/Slider';

export const Products = () => {
  const theme = useTheme();

  const settings: SwiperProps = {
    spaceBetween: 40,
    slidesPerView: 4,
    navigation: true,
    pagination: {
      clickable: true,
    }
  };

  return (
    <Grid
      container
      minHeight={'100vh'}
      paddingX={theme.spacing(8)}
      marginBottom={theme.spacing(2)}
    >
      <Grid
        container
        padding={4}
      >
        <Typography fontSize={'20px'} variant='body2'>Campeões de vendas</Typography>
      </Grid>
      <Grid
        container
      >
        <Slider settings={settings}>
          <Grid
            container
          >
            <SwiperSlide>
              <Product1 />
            </SwiperSlide>

            <SwiperSlide>
              <Product2 />
            </SwiperSlide>

            <SwiperSlide>
              <Product3 />
            </SwiperSlide>

            <SwiperSlide>
              <Product4 />
            </SwiperSlide>

            <SwiperSlide>
              <Product5 />
            </SwiperSlide>

            <SwiperSlide>
              <Product6 />
            </SwiperSlide>

          </Grid>
        </Slider>
      </Grid>

      <Grid
        container
        padding={4}
      >
        <Typography fontSize={'20px'} variant='body2'>Você não pode perder!</Typography>
      </Grid>
      <Grid
        container
      >
        <Slider settings={settings}>
          <Grid
            container
          >
            <SwiperSlide>
              <Product1 />
            </SwiperSlide>

            <SwiperSlide>
              <Product2 />
            </SwiperSlide>

            <SwiperSlide>
              <Product3 />
            </SwiperSlide>

            <SwiperSlide>
              <Product4 />
            </SwiperSlide>

            <SwiperSlide>
              <Product5 />
            </SwiperSlide>

            <SwiperSlide>
              <Product6 />
            </SwiperSlide>

          </Grid>
        </Slider>
      </Grid>
    </Grid>
  );
};