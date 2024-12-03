'use client'
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#f57c00', 
    },
  },
  typography: {

    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;