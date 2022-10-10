import React from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000')

export const ListTickers = () => {
  console.log(socket)
  return <div className="list-tickers">ListTickers</div>
}
