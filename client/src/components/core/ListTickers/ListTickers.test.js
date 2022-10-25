import { ListTickers } from './ListTickers'

import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { store } from '../../../store/store'

test('component should be render', () => {
  render(
    <Provider store={store}>
      <ListTickers />
    </Provider>
  )
})
