import React from 'react'
import ReactDOM from 'react-dom'
import LoginPage from '../../routes/LoginPage/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <PrivateRoute
        path={'/login'}
        component={LoginPage}
      />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
