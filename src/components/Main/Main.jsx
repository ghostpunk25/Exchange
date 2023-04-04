import { Box, Container, Card, CardContent, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCallback } from "react";
import { Inp } from "./Main.styled";

const valuta = ['UAH', 'USD', 'EUR']

export const Main = ({ arrCurrency }) => {
   const [inp1, setInp1] = useState('');
   const [select1, setSelect1] = useState('UAH');
   const [inp2, setInp2] = useState('');
   const [select2, setSelect2] = useState('USD');

   const handleChange1 = (event) => {
      setSelect1(event.target.value);
   };

   const handleChange2 = (event) => {
      setSelect2(event.target.value);
   };

   const handleInp1 = useCallback(value => {
      const price = value / arrCurrency[select2].rateBuy
      const result = price * arrCurrency[select1].rateBuy
      setInp1(value)
      setInp2(result.toFixed(2))
      if (value === '') {
         setInp2('')
      }
   }, [arrCurrency, select1, select2])

   const handleInp2 = useCallback(value => {
      const price = value / arrCurrency[select1].rateSell
      const result = price * arrCurrency[select2].rateSell
      setInp2(value)
      setInp1(result.toFixed(2))
      if (value === '') {
         setInp1('')
      }
   }, [arrCurrency, select1, select2])

   useEffect(() => {
      if (inp1 === '') {
         return
      }
      handleInp1(inp1)
   }, [select1])

   useEffect(() => {
      if (inp2 === '') {
         return
      }
      handleInp2(inp2)
   }, [select2])

   return (
      <Box component='main'>
         <Box component='section' sx={{ py: '100px' }}>
            <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', }}>
               <Card sx={{ maxWidth: '500px', py: '20px' }}>
                  <CardContent>
                     <Typography
                        component='h1'
                        sx={{
                           textAlign: 'center',
                           mb: '30px',
                           fontSize: '35px',
                           fontWeight: '700',
                           lineHeight: '38px',
                        }}>
                        Enter the amount
                     </Typography>
                     <Grid container spacing={2} gap='20px'>
                        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', }}>
                           <Inp
                              label="We Buy"
                              value={inp1}
                              type='number'
                              onChange={(e) => handleInp1(e.target.value)}
                           />
                           <FormControl sx={{ minWidth: '85px' }}>
                              <InputLabel>Currency</InputLabel>
                              <Select
                                 value={select1}
                                 label="Currency"
                                 name={select1}
                                 onChange={handleChange1}
                              >
                                 {valuta.map(item => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                 ))}
                              </Select>
                           </FormControl>
                        </Grid>
                        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', }}>
                           <Inp
                              label="We Sell"
                              value={inp2}
                              type='number'
                              onChange={(e) => handleInp2(e.target.value)}
                           />
                           <FormControl sx={{ minWidth: '85px' }}>
                              <InputLabel>Currency</InputLabel>
                              <Select
                                 value={select2}
                                 name={select2}
                                 label="Currency"
                                 onChange={handleChange2}
                              >
                                 {valuta.map(item => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                 ))}
                              </Select>
                           </FormControl>
                        </Grid>
                     </Grid>
                  </CardContent>
               </Card>
            </Container>
         </Box>
      </Box>
   )
}