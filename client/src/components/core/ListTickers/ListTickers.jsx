import React from 'react'
import { useSelector } from 'react-redux'

import { Ticker } from '../Ticker/Ticker'

export const ListTickers = () => {
  const tickers = useSelector((state) => state.tickers.tickers)
  console.log(tickers)

  return (
    <div className="list-tickers">
      {tickers.map((el) => (
        <Ticker key={el.ticker} {...el} />
      ))}
    </div>
  )
}
