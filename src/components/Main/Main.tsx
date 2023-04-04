import { Box, Container, Card, CardContent, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { FC, useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCallback } from "react";
import { Inp } from "./Main.styled";
import { IArrCurrencyProps } from "../../models";

const valuta = ['UAH', 'USD', 'EUR'] as const;

export const Main: FC<IArrCurrencyProps> = ({ arrCurrency }) => {
   const [inp1, setInp1] = useState<number | string>('');
   const [select1, setSelect1] = useState<typeof valuta[number]>('UAH');
   const [inp2, setInp2] = useState<number | string>('');
   const [select2, setSelect2] = useState<typeof valuta[number]>('USD');

   const handleChange1 = (value: typeof valuta[number]) => {
      setSelect1(value);
   };

   const handleChange2 = (value: typeof valuta[number]) => {
      setSelect2(value);
   };

   const handleInp1 = useCallback((value: number) => {
      if (!arrCurrency) {
         return
      }
      const price = value / arrCurrency[select2].rateBuy
      const result = price * arrCurrency[select1].rateBuy
      setInp1(value)
      setInp2(result.toFixed(2))
      if (value === 0) {
         setInp1('')
         setInp2('')
      }
   }, [arrCurrency, select1, select2])

   const handleInp2 = useCallback((value: number) => {
      if (!arrCurrency) {
         return
      }
      const price = value / arrCurrency[select1].rateSell
      const result = price * arrCurrency[select2].rateSell
      setInp2(value)
      setInp1(result.toFixed(2))
      if (value === 0) {
         setInp2('')
         setInp1('')
      }
   }, [arrCurrency, select1, select2])

   useEffect(() => {
      if (inp1 === '') {
         return
      }
      if (typeof inp1 === 'number') {
         handleInp1(inp1)
      }
   }, [select1])

   useEffect(() => {
      if (inp2 === '') {
         return
      }
      if (typeof inp2 === 'number') {
         handleInp1(inp2)
      }
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
                              onChange={(e) => handleInp1(Number(e.target.value))}
                           />
                           <FormControl sx={{ minWidth: '85px' }}>
                              <InputLabel>Currency</InputLabel>
                              <Select
                                 value={select1}
                                 label="Currency"
                                 name={select1}
                                 onChange={(e) => handleChange1(e.target.value as unknown as typeof valuta[number])}
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
                              onChange={(e) => handleInp2(Number(e.target.value))}
                           />
                           <FormControl sx={{ minWidth: '85px' }}>
                              <InputLabel>Currency</InputLabel>
                              <Select
                                 value={select2}
                                 name={select2}
                                 label="Currency"
                                 onChange={(e) => handleChange2(e.target.value as unknown as typeof valuta[number])}
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