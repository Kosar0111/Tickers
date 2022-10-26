import { render } from '@testing-library/react'
import { Ticker } from '../Ticker/Ticker'

const ticker = {
  ticker: 'AAPL',
  exchange: 'NASDAQ',
  price: 279.29,
  change: 64.52,
  change_percent: 0.84,
  dividend: 0.56,
  yield: 1.34,
  last_trade_time: '2021-04-30T11:53:21.000Z'
}
describe('Ticker', () => {
  it('should create item', () => {
    const component = render(<Ticker {...ticker} />)
    expect(component).toMatchSnapshot()
  })
})
