import { useEffect, useRef } from 'react'
import './HeaderItem.css'
import down from '../../../assets/img/down.svg'
import up from '../../../assets/img/up.svg'

export const HeaderItem = (el) => {
  const { price, ticker } = el
  const prevEl = useRef(el)
  useEffect(() => {
    if (prevEl.current.price !== el.price) return (prevEl.current = el)
  }, [el])
  return (
    <div className="item">
      <div className="company-item">
        <span className="label">Ticker</span>
        {ticker}
      </div>
      <div
        className={
          prevEl.current.price < el.price ? 'change_percent-item' : 'change_percent-negative-item'
        }
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
    </div>
  )
}
