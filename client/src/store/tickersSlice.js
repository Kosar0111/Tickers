import { createSlice } from '@reduxjs/toolkit'
import io from 'socket.io-client'

const socket = io.connect('localhost:4000')

const tickersSlice = createSlice({
  name: 'tickers',
  initialState: {
    tickers: []
  },

  reducers: {
    getTickers: (state, action) => {
      state.tickers = action.payload
    }
  }
})
export const startData = () => (dispatch) => {
  socket.emit('start')
  socket.on('ticker', (data) => {
    dispatch(getTickers(data))
  })
}
export const { getTickers } = tickersSlice.actions
export default tickersSlice.reducer
