import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  useTheme,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

interface IFormInputs {
  cardNum: string
  cardName: string
  cardDate: string
  cardCvc: string
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

export const CardForm = () => {

  const theme = useTheme();

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const { register, handleSubmit } = useForm<IFormInputs>();

  const handleChangeCardMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setMonth(value);
  };
  const handleChangeCardYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setYear(value);
  };
  const handleChangeCardCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setCvc(value);
  };

  return (
    <Grid
      container
      minHeight={'100vh'}
      paddingX={theme.spacing(8)}
    >

      <Grid
        container
        width={'55%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid
          container
          width={'80%'}
          height={'75%'}
          bgcolor={'#52BBB7'}
          justifyContent={'end'}
          alignContent={'center'}
        >
          <Grid
            container
            width={'22rem'}
            height={'15rem'}
            borderRadius={'14px'}
            alignContent={'end'}
            justifyContent={'center'}
            marginRight={theme.spacing(10)}
            marginTop={theme.spacing(8)}
            bgcolor={'#6B39AE'}
          >
            <Grid
              container
              width={'80%'}
              marginBottom={theme.spacing(3)}
              gap={2}
              flexDirection={'column'}
              justifyContent={'end'}
            >
              <Grid item>
              </Grid>
            </Grid>
            <Grid
              container
              width={'80%'}
              marginBottom={theme.spacing(3)}
              gap={2}
              flexDirection={'column'}
              justifyContent={'end'}
            >
              <Grid item>
                <Typography color={'#FFF'} fontSize={'20px'}>{cardNumber}</Typography>
              </Grid>

              <Grid
                container
                flexDirection={'row'}
                justifyContent={'space-around'}
              >
                <Grid
                  container
                  width={'75%'}
                >
                  <Typography textTransform={'uppercase'} color={'#FFF'} fontSize={'16px'}>{name}</Typography>
                </Grid>
                <Grid
                  container
                  width={'20%'}
                >
                  <Typography color={'#FFF'} fontSize={'16px'}>{month}/</Typography>
                  <Typography color={'#FFF'} fontSize={'16px'}>{year}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            width={'22rem'}
            height={'15rem'}
            bgcolor={'#D8D8D8'}
            borderRadius={'14px'}
            justifyContent={'center'}
            marginRight={theme.spacing(2)}
            marginTop={theme.spacing(2)}
          >
            <Grid
              container
              width={'100%'}
              marginBottom={theme.spacing(2)}
              gap={1}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Grid
                container
                height={theme.spacing(5)}
                bgcolor={'black'}
                marginTop={3}
              >
              </Grid>
              <Grid
                container
                width={'90%'}
                height={theme.spacing(4)}
                bgcolor={'#FBFBFB'}
                alignContent={'center'}
                justifyContent={'end'}
              >
                <Grid item marginRight={theme.spacing(2)}>
                  <Typography>{cvc}</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                height={theme.spacing(5)}
                marginTop={3}
                width={'80%'}
                justifyContent={'center'}
              >
                <Typography textAlign={'left'} fontSize={'8px'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed libero error, aperiam voluptate
                  blanditiis impedit ducimus eius ullam vitae aliquam excepturi cupiditate? Temporibus accusantium
                  alias distinctio consequatur nobis adipisci?
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      <Grid
        container
        width={'45%'}
        alignItems={'center'}
      >
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            flexDirection={'column'}
            gap={2}
            width={'75%'}
          >
            <Grid
              container
              flexDirection={'column'}
              gap={2}
            >
              <Typography variant='body2' fontSize={'24px'}>Pagamento</Typography>
              <Grid
                container
                gap={1}
                flexDirection={'column'}
              >
                <Typography variant='h3' fontSize={'16px'}>Nome do portador do cartão</Typography>
                <Grid item>
                  <TextField
                    fullWidth
                    required
                    placeholder=''
                    value={name}
                    {...register('cardName', { required: true })}
                    onChange={(e) => setName(e.target.value)}
                    inputProps={{ maxLength: 32 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                gap={1}
                flexDirection={'column'}
              >
                <Typography variant='h3' fontSize={'16px'}>Número do cartão</Typography>
                <Grid item>
                  <TextField
                    fullWidth
                    placeholder=''
                    required
                    {...register('cardNum', { required: true })}
                    value={cardNumber
                      .replace(/\s/g, '')
                      .replace(/(\d{4})/g, '$1 ')
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    inputProps={{ minLength: 19, maxLength: 19 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              gap={2}
            >
              <Grid
                container
                flexDirection={'row'}
                gap={2}
                width={'48%'}
              >
                <Typography variant='h3' fontSize={'16px'}>Validade</Typography>
                <Grid container gap={2}>
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      placeholder='MM'
                      value={month}
                      onChange={handleChangeCardMonth}
                      onFocus={(e) => setFocus(e.target.name)}
                      sx={{ width: '70px' }}
                      inputProps={{ minLength: 2, maxLength: 2 }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      required
                      placeholder='YY'
                      value={year}
                      onChange={handleChangeCardYear}
                      onFocus={(e) => setFocus(e.target.name)}
                      sx={{ width: '70px' }}
                      inputProps={{ minLength: 2, maxLength: 2 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                flexDirection={'row'}
                gap={2}
                width={'48%'}
              >
                <Typography variant='h3' fontSize={'16px'}>CVC</Typography>
                <Grid item>
                  <TextField
                    fullWidth
                    required
                    placeholder='000'
                    value={cvc}
                    onChange={handleChangeCardCvc}
                    onFocus={(e) => setFocus(e.target.name)}
                    inputProps={{ minLength: 3, maxLength: 3 }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection={'column'}
              justifyContent={'end'}
              height={'80px'}
            >
              <Button
                type='submit'
                variant={'contained'}
                // onClick={Confirmar}
                sx={{
                  width: '230px',
                  height: '44px',
                  borderRadius: '25px'
                }}
                style={{
                  background: '#221A61'
                }}
              >
                <Typography variant={'body2'} fontSize={'16px'} textTransform={'capitalize'}>
                  Confirmar
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid >
    </Grid >
  );
};
