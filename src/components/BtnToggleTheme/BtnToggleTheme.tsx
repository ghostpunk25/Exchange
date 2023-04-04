import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { FC, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../ToggleColorMode/ToggleColorMode'


export const BtnToggleTheme: FC = () => {
   const theme = useTheme();
   const colorMode = useContext(ColorModeContext);

   return (
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
         {theme.palette.mode !== 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
   )
}