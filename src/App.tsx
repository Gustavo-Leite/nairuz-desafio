import React from 'react';
import { Theme } from './shared/themes';
import { ThemeProvider } from '@mui/material';
import { OnePage } from './pages/Dashboard';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <OnePage />
    </ThemeProvider>
  );
};

