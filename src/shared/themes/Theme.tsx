import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#52BBB7',
      dark: '#313131',
      light: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F26CA7',
      dark: '#221A61',
      light: '#F4B1CE',
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F6F5F5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: '#FFFFFF',
        textPrimary: '#FFFFFF',
        textSecondary: '#FFFFFF',
        textInherit: '#FFFFFF',
      }
    }
  },
  typography: {
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 900,
    },
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});