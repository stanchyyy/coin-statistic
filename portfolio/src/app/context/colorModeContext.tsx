'use client';

import React, { useState, useMemo, useContext, ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { orange, teal } from '@mui/material/colors';
import { Box, Container } from '@mui/material';

interface ColorModeContextType {
  toggleColorMode: () => void;
}

const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );


  const theme = 
      createTheme({
        palette: {
          mode,
          primary: teal,
          secondary: orange,
          text:{
            primary: mode==='light' ? 'rgba(0, 0, 0, 0.87)' : '#fff',
            secondary: mode==='light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)',
            disabled : mode==='light' ? 'rgba(0, 0, 0, 0.38)' : 'rgba(255, 255, 255, 0.5)'
          },
          background:{
            paper: mode==='light' ?'#fff':'#272727',
            default: mode==='light' ?'#fff':'#272727',
          }
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      });

  return (
    <ColorModeContext.Provider 

    value={colorMode}>
      <Box
       sx={{
        bgcolor: 'background.black'
       }}
      >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContext;
