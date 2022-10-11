import React from 'react'
import { useSelector } from 'react-redux'
import './ListTickers.css'

import { Ticker } from '../Ticker/Ticker'

export const ListTickers = () => {
  const tickers = useSelector((state) => state.tickers.tickers)

  return (
    <div className="list-tickers">
      <h2> Вас может заинтересовать:</h2>
      {tickers.map((el) => (
        <Ticker key={el.ticker} {...el} />
      ))}
    </div>
  )
}
