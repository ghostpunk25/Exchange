import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BtnToggleTheme } from '../BtnToggleTheme/BtnToggleTheme';
import { FC } from 'react';
import { IArrCurrencyProps } from "../../models";

export const Header: FC<IArrCurrencyProps> = ({ arrCurrency }) => {

   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ py: '20px', justifyContent: 'space-between' }}>
               <Typography
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: 'flex',
                     fontWeight: '700',
                     fontSize: { sm: '20px', xs: '16px' },
                  }}
               >
                  EXCHANGE
               </Typography>
               {arrCurrency && <Box
                  sx={{
                     display: 'flex',
                     flexDirection: { sm: 'row', xs: 'column' },
                     gap: { sm: '30px', xs: '5px', },
                     backgroundColor: '#0719274d',
                     p: '7px',
                     borderRadius: '13px'
                  }}>
                  <Typography
                     sx={{
                        display: 'flex',
                        fontSize: { sm: '20px', xs: '16px' },
                     }}
                  >
                     $ {arrCurrency['USD'].rateBuy} / {arrCurrency['USD'].rateSell.toFixed(2)}
                  </Typography>
                  <Typography
                     sx={{
                        display: 'flex',
                        fontSize: { sm: '20px', xs: '16px' },
                     }}
                  >
                     € {arrCurrency['EUR'].rateBuy} / {arrCurrency['EUR'].rateSell.toFixed(2)}
                  </Typography>
               </Box>}
               <BtnToggleTheme />
            </Toolbar>
         </Container>
      </AppBar >
   );
}