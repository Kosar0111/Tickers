import { selectTickers } from '../selectTickers'

describe('redux select', () => {
  it('empty state', () => {
    expect(selectTickers()).toEqual([])
  })
  it('should select tickers from state', () => {
    expect(
      selectTickers({
        tickers: {
          tickers: { ticker: 'AAPL', exchange: 'NASDAQ' }
        }
      })
    ).toEqual({ ticker: 'AAPL', exchange: 'NASDAQ' })
  })
})
