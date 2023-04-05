import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { FC, useEffect, useState } from 'react';
import { getCurrencyList } from '../../currencyAPI/currencyAPI';
import { IArrCurrency, ICurrency } from "../../models";
import { AlertCust } from "../AlertCust/AlertCust";

export const App: FC = () => {
  const [arrCurrency, setArrCurrency] = useState<IArrCurrency | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCloseAlert = (close: null) => {
    setError(close)
  }

  useEffect(() => {
    async function getCurrency() {
      try {
        const response: ICurrency[] = await getCurrencyList()
        setArrCurrency({ USD: response[0], EUR: response[1], UAH: { rateBuy: 1, rateSell: 1 } })
      } catch (error) {
        console.log(error);
        setError('Sorry, something went wrong... Come back to the site in a few minutes, or try reloading the page.')
      }
    }
    getCurrency()
  }, [])

  return (
    <div className="wrapper">
      {error && !arrCurrency && <AlertCust error={error} handleCloseAlert={handleCloseAlert} />}
      <Header arrCurrency={arrCurrency} />
      <Main arrCurrency={arrCurrency} />
    </div>
  );
};