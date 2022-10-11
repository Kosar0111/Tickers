import { useRef, useEffect } from 'react'
import down from '../../../assets/img/down.svg'
import up from '../../../assets/img/up.svg'
import './Ticker.css'

export const Ticker = (el) => {
  const { change, change_percent, dividend, exchange, last_trade_time, price, ticker } = el
  const prevEl = useRef(el)
  useEffect(() => {
    if (prevEl.current.price !== el.price) return (prevEl.current = el)
  }, [el])
  return (
    <div className="ticker">
      <div className="company">
        <span className="label">Ticker</span>
        {ticker}
      </div>
      <div
        className={prevEl.current.price < el.price ? 'change_percent' : 'change_percent-negative'}
      >
        <span className="label">Price</span>
        <div className="value">
          {prevEl.current.price > el.price ? (
            <img src={down} alt="down" className="img-down" />
          ) : (
            <img src={up} alt="down" className="img-down" />
          )}
          {price}
        </div>
      </div>
      <div
        className={prevEl.current.price < el.price ? 'change_percent' : 'change_percent-negative'}
      >
        <span className={'label'}>Change</span>
        <div className="value">
          {prevEl.current.price > el.price ? (
            <img src={down} alt="down" className="img-down" />
          ) : (
            <img src={up} alt="down" className="img-down" />
          )}
          {change}
        </div>
      </div>
      <div
        className={prevEl.current.price < el.price ? 'change_percent' : 'change_percent-negative'}
      >
        <span className="label">Change %</span>
        <div className="value">
          {prevEl.current.price > el.price ? (
            <img src={down} alt="down" className="img-down" />
          ) : (
            <img src={up} alt="down" className="img-down" />
          )}
          {change_percent}
        </div>
      </div>
      <div className="dividend">
        <span className="label">Divident</span>
        {dividend}
      </div>
      <div className="tickeexchanger">
        <span className="label">Exchange</span>
        {exchange}
      </div>
      <div className="last_trade_time">
        <span className="label">Trade time</span>
        {last_trade_time.slice(11, -5)}
      </div>
    </div>
  )
}
