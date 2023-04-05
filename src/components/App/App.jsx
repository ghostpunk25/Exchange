import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";
import { useEffect, useState } from 'react';
import { getCurrencyList } from 'currencyAPI/currencyAPI';
import { AlertCust } from "components/AlertCust/AlertCust";

export const App = () => {
  const [arrCurrency, setArrCurrency] = useState(null);
  const [error, setError] = useState(null);


  const handleCloseAlert = close => {
    setError(close)
  }

  useEffect(() => {
    async function getCurrency() {
      try {
        const response = await getCurrencyList()
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
      {/* <Header theme={theme} colorMode={colorMode} arrCurrency={arrCurrency} /> */}
      <Header arrCurrency={arrCurrency} />
      <Main arrCurrency={arrCurrency} />
    </div>
  );
};