import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { startData } from './store/tickersSlice'

import './App.css'
import { ListTickers } from './components/core/ListTickers/ListTickers'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startData())
  }, [dispatch])
  return (
    <div className="app">
      <ListTickers />
    </div>
  )
}
