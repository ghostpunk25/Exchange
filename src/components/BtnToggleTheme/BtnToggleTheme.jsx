import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

export const BtnToggleTheme = ({ theme, colorMode }) => {
   return (
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
         {theme.palette.mode !== 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
   )
}