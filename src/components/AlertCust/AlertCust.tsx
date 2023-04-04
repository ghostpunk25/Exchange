import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { FC } from 'react';

interface IAlertCustProps {
   handleCloseAlert: (close: null) => void,
   error: string | null,
}

export const AlertCust: FC<IAlertCustProps> = ({ handleCloseAlert, error }) => {
   return (
      <Alert
         onClose={() => handleCloseAlert(null)}
         sx={{
            zIndex: 5,
            position: 'absolute',
            top: '10%',
            left: '50%',
            width: { sm: '50%', xs: '80%' },
            transform: 'translate(-50%,-10%)'
         }}
         severity="error">
         <AlertTitle>Error</AlertTitle>
         {error}
      </Alert>
   )
}