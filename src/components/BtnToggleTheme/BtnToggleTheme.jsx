import { useTheme } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { ColorModeContext } from 'components/ToggleColorMode/ToggleColorMode';

export const BtnToggleTheme = () => {
   const theme = useTheme();
   const colorMode = useContext(ColorModeContext);

   return (
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
         {theme.palette.mode !== 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
   )
}