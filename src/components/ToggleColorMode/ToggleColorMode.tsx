import { App } from "../App/App";
import { createContext, FC, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ToggleColorMode: FC = () => {
   const [mode, setMode] = useState<'light' | 'dark'>('dark');
   const colorMode = useMemo(
      () => ({
         toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
         },
      }),
      [],
   );

   const theme = useMemo<Theme>(
      () =>
         createTheme({
            palette: {
               mode,
            },
         }),
      [mode],
   );

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}