import React from 'react'

export const Ticker = (el) => {
  const { change, change_percent, dividend, exchange, last_trade_time, price, ticker } = el
  return (
    <div>
      <div>{change}</div>
      <div>{change_percent}</div>
      <div>{dividend}</div>
      <div>{exchange}</div>
      <div>{last_trade_time}</div>
      <div>{price}</div>
      <div>{ticker}</div>
    </div>
  )
}
