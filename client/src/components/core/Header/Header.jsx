import { useSelector } from 'react-redux'
import './Header.css'
import { HeaderItem } from '../HeaderItem/HeaderItem'

export const Header = () => {
  const tickers = useSelector((state) => state.tickers.tickers)

  return (
    <div className="header">
      {tickers.map((el) => (
        <HeaderItem key={el.ticker} {...el} />
      ))}
    </div>
  )
}
