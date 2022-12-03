import React from 'react';
import { ThemeProvider, createTheme, Grid } from '@mui/material';
import OrderBook from './OrderBook';
import './style.css';

export default function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <OrderBook />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
