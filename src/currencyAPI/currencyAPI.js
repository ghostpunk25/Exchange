import axios from "axios";

const fetchApi = axios.create({
   baseURL: 'https://api.monobank.ua/bank/',
});

export const getCurrencyList = async () => {
   const response = await fetchApi.get(`currency`);
   return response.data;
};