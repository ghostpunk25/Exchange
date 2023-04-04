export interface ICurrency {
   currencyCodeA?: number,
   currencyCodeB?: number,
   date?: number,
   rateSell: number,
   rateBuy: number,
   rateCross?: number,
}

export interface IArrCurrency {
   USD: ICurrency,
   EUR: ICurrency,
   UAH: ICurrency,
}

export interface IArrCurrencyProps {
   arrCurrency: IArrCurrency | null,
}